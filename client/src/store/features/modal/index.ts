import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ModalProps } from "../../../types";


const initialState:ModalProps={
    modal:""
}

const modal=createSlice({
    name:"modal",
    initialState,
    reducers:{
        setModal:(state,action:PayloadAction<ModalProps>)=>{
            state.modal=action.payload.modal
        },
        removeModal:(state)=>{
            state.modal=""
        }
    }
})
export const {setModal,removeModal}=modal.actions
export default modal.reducer