import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {  Theme, ThemeState } from "../../../types";






// 🔑 LocalStorage'dan oku (yoksa "system" kullan)
const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) return stored;
  }
  return "system";
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;

      // LocalStorage'a yaz
      localStorage.setItem("theme", action.payload);

      // HTML root'a uygula
      const root = window.document.documentElement;
      if (action.payload === "dark") {
        root.classList.add("dark");
      } else if (action.payload === "light") {
        root.classList.remove("dark");
      } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
    },
  },
});
export const {setTheme}=themeSlice.actions
export default themeSlice.reducer