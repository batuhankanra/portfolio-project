import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ThemeState } from "../../types";

const initialState:ThemeState={
    value:"system"
}

const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers: {
        setTheme:(state,action:PayloadAction<ThemeState>)=>{
            state.value=action.payload.value
        }
    }
})
export const {setTheme}=themeSlice.actions

export default themeSlice.reducer