import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ModalState } from "../../../types";


const initialState:ModalState={
    content:null,
    isOpen:false,
    title:null
}

const modal=createSlice({
    name:"modal",
    initialState,
    reducers:{
        openModal:(state,action:PayloadAction<ModalState>)=>{
            state.title=action.payload.title
            state.content=action.payload.content
            state.isOpen=action.payload.isOpen
        },
        closeModal:(state)=>{
            state.content=null,
            state.isOpen=false,
            state.title=null
        }
    }
})

export const {closeModal,openModal} =modal.actions
export default modal.reducer