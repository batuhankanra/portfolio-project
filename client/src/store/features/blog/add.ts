import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../lib/api";
import type { blogAddState } from "../../../types";


export const blogAdd=createAsyncThunk("blog/add",async (formData:FormData ,{rejectWithValue})=>{
    try {
      const res = await api.post("/blog/",formData,{
        headers:{"Content-Type":"multipart/form-data"}
      }); 
      return res.data ;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.msg || "Blogları alamadık");
    }
})

const initialState:blogAddState ={
    status:"Idle",
    error:""
}
const blog=createSlice({
    name:"blog",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(blogAdd.pending,(state)=>{
            state.status="Loading"
            state.error=""
        })
        builder.addCase(blogAdd.rejected,(state,action)=>{
            state.status="Fail"
            state.error=action.payload as string
        })
        builder.addCase(blogAdd.fulfilled,(state)=>{
            state.status="Success"
            state.error=""
        })

    }
})

export default blog.reducer