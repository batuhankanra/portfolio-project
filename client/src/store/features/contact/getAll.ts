import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../lib/api";
import type { Contact, ContactsState } from "../../../types";



export const getContact=createAsyncThunk("contact/get",async (_,{rejectWithValue})=>{
     try {
      const res = await api.get("/contact/"); // backend endpoint
      return res.data as Contact[];
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.msg || "We couldn't get contact");
    }
})


const initialState:ContactsState={
    contact:[],
    error:"",
    status:"Idle"

}

const contact=createSlice({
    name:"contact",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(getContact.rejected,(state,action)=>{
            state.error=action.payload as string
            state.status="Error"
            state.contact=[]
        })
        builder.addCase(getContact.pending,(state)=>{
            state.status="Loading"
            state.error=""
            state.contact=[]
        })
        builder.addCase(getContact.fulfilled,(state,action)=>{
            state.contact=action.payload as Contact[]
            state.error=""
            state.status="Success"
        })
    }
})


export default contact.reducer