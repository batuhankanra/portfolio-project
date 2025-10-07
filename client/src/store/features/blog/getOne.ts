import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../lib/api";
import type { Blog, BlogOneState } from "../../../types";


export const getOneBLog=createAsyncThunk("blog/getOne",async (slug:number,{rejectWithValue})=>{
     try {
      const res = await api.get(`/blog/${slug}`); // backend endpoint
      return res.data as Blog;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.msg || "Blogları alamadık");
    }
})


const initialState:BlogOneState={
    loading:false,
    error:"",
    blog:{id:0,content:"",cover_image:"",created_at:"",slug:"",title:"",updated_at:""}
}

const modalGetOne=createSlice({
    name:"modalGetOne",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(getOneBLog.rejected,(state,action)=>{
            state.error=action.payload as string
            state.loading=false
            state.blog={id:0,content:"",cover_image:"",created_at:"",slug:"",title:"",updated_at:""}

        })
        builder.addCase(getOneBLog.pending,(state)=>{
            state.loading=true    
            state.blog={id:0,content:"",cover_image:"",created_at:"",slug:"",title:"",updated_at:""}
            state.error=""
        })
        builder.addCase(getOneBLog.fulfilled,(state,action)=>{
            state.blog=action.payload
            state.loading=false
            state.error=""
        })

    }
})

export default modalGetOne.reducer