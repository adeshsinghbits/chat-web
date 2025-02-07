import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import authReducer from "../features/authSlice";
import chatReducer from "../features/chatSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    chat: chatReducer,
    auth: authReducer,
  },
});

export default store;
