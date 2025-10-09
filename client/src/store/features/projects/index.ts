import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../lib/api";
import type { Project, ProjectsState } from "../../../types";



export const getProjects=createAsyncThunk("project/get",async (_,{rejectWithValue})=>{
     try {
      const res = await api.get("/project/"); // backend endpoint
      return res.data as Project[];
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.msg || "We couldn't get contact");
    }
})


const initialState:ProjectsState={
    projects:[],
    error:"",
    status:"Idle"

}

const projects=createSlice({
    name:"projects",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(getProjects.rejected,(state,action)=>{
            state.error=action.payload as string
            state.status="Error"
            state.projects=[]
        })
        builder.addCase(getProjects.pending,(state)=>{
            state.status="Loading"
            state.error=""
            state.projects=[]
        })
        builder.addCase(getProjects.fulfilled,(state,action)=>{
            state.projects=action.payload as Project[]
            state.error=""
            state.status="Success"
        })
    }
})


export default projects.reducer