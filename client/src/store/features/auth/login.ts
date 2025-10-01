import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { AuthState } from "../../../types";
import api from "../../../lib/api";

export const loginApi =createAsyncThunk("auth/login",async (credential:{email:string,password:string},{rejectWithValue})=>{
    try{
        const res=await api.post("/user/login",credential)
        return res.data
    }catch (err:any){
        return rejectWithValue(err.response?.data.msg || "login failed")
    }
})
export const meApi=createAsyncThunk("auth/me",async ()=>{
    const res=await api.get("user/me")
    return res.data
})




const initialState:AuthState={
    user:null,
    isAuthticated:false,
    loading:false,
    error:null
}



const loginSlice =createSlice({
    name:"login",
    initialState,
    reducers: {
        logoutReducer:state=>{
            state.isAuthticated=false
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginApi.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        builder.addCase(loginApi.fulfilled,(state)=>{
            state.loading=false
            state.isAuthticated=true
        })
        builder.addCase(loginApi.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload as string
        })
        builder.addCase(meApi.fulfilled,(state,action)=>{
            state.user=action.payload
        })
    }
})

export const {logoutReducer}=loginSlice.actions
export default loginSlice.reducer