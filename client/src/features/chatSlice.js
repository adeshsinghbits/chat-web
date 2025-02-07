import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getUsers = createAsyncThunk("chat/getUsers", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${API_URL}/messages/users`, { withCredentials: true });
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const getMessages = createAsyncThunk("chat/getMessages", async (userId, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${API_URL}/messages/${userId}`, { withCredentials: true });
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const sendMessage = createAsyncThunk("chat/sendMessage", async ({ messageData, selectedUserId }, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${API_URL}/messages/send/${selectedUserId}`, messageData, { withCredentials: true });

    
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,
  },
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isUsersLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isUsersLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isUsersLoading = false;
      })
      .addCase(getMessages.pending, (state) => {
        state.isMessagesLoading = true;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.isMessagesLoading = false;
        state.messages = action.payload;
      })
      .addCase(getMessages.rejected, (state) => {
        state.isMessagesLoading = false;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      });
  },
});

export const { setSelectedUser, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
