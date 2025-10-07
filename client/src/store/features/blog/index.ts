import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import type { Blog, BlogState } from "../../../types";
import api from "../../../lib/api";


export const blogApi=createAsyncThunk("blog/get",async (_ , { rejectWithValue })=>{
     try {
      const res = await api.get("/blog/"); // backend endpoint
      return res.data as Blog[];
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.msg || "Blogları alamadık");
    }
})

const initialState:BlogState={
    blog: [],
    loading:false,
    error:""

}

const blog=createSlice({
    name:"blog",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(blogApi.pending,(state)=>{
            state.loading=true
            state.error=""
            state.blog=[]
        })
        builder.addCase(blogApi.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload as string
            state.blog=[]
        })
        builder.addCase(blogApi.fulfilled,(state,action)=>{
            state.blog=action.payload
            state.loading=false
            state.error=""
        })
    }
})

export default blog.reducer