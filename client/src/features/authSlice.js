import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { io } from "socket.io-client";

const API_URL = import.meta.env.VITE_API_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const checkAuth = createAsyncThunk("auth/checkAuth", async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.get(`${API_URL}/auth/check`, { withCredentials: true });
    dispatch(connectSocket(response.data._id));
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Failed to check authentication.");
  }
});

export const registerUser = createAsyncThunk("auth/register", async (userData,{ rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, userData);
    
    dispatch(connectSocket(response.data._id));
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message)
  }
});

export const loginUser = createAsyncThunk("auth/login", async (userData,  { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData, { withCredentials: true });
    console.log(response.user.data._id);
    
    dispatch(connectSocket(response.user.data._id));
    return response.data;
  } catch (error) {
    return  rejectWithValue(error.response.data.message)
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async (_, { rejectWithValue, dispatch }) => {
  try {
    await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
    dispatch(disconnectSocket());
  } catch (error) {
    return rejectWithValue(error.response.data.message)
  }
});


const initialState = {
  authUser: null,
  messsage: "",
  status: 'idle',
  error: null,
  onlineUsers: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    connectSocket: (state, action) => {
      if (state.socket?.connected) return;
      const socket = io(BASE_URL, { query: { userId: action.payload } });
      socket.connect();
      state.socket = socket;
      socket.on("getOnlineUsers", (userIds) => {
        console.log("userIds: ", userIds);
        state.onlineUsers = userIds;
        console.log("onlineUsers: ", state.onlineUsers);
      });
    },
    disconnectSocket: (state) => {
      if (state.socket?.connected) {
        state.socket.disconnect();
        state.socket = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.socket && state.socket.connect();
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.messsage =  action.payload.messsage
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authUser = action.payload;
        state.token = action.payload;
        state.messsage =  action.payload.messsage
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = null;
        state.token = action.payload;
      });
  },
});

export const { connectSocket, disconnectSocket } = authSlice.actions;

export default authSlice.reducer;
