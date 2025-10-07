import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../lib/api";
import type { blogAddState } from "../../../types";



export const deleteBlog=createAsyncThunk("blog/delete",async (id:number,{rejectWithValue})=>{
try {
      const res = await api.delete(`/blog/${id}`); // backend endpoint
      return res.data ;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.msg || "Blogları alamadık");
    }
})

const initialState:blogAddState={
        status:"Idle",
        error:""
    }

const deleteModal=createSlice({
    name:"blog",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(deleteBlog.rejected,(state,action)=>{
            state.status="Fail"
            state.error=action.payload as string
        })
        builder.addCase(deleteBlog.pending,(state)=>{
            state.status="Loading"
            state.error=""
        })
        builder.addCase(deleteBlog.fulfilled,(state)=>{
            state.status="Success"
        })
    }

})

export default deleteModal.reducer