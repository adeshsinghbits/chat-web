import { createSlice } from "@reduxjs/toolkit";

// Check localStorage for the saved theme or default to "light"
const storedTheme = localStorage.getItem("theme") || "light";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: storedTheme, 
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode); // Persist theme
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
