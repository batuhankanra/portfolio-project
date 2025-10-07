import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../lib/api";
import type { blogAddState } from "../../../types";

export const blogUpdate = createAsyncThunk(
  "blog/update",
  async (
    { id, formData }: { id: number; formData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const res = await api.put(`/blog/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.msg || "Blog güncellenemedi");
    }
  }
);

const initialState: blogAddState = {
  status: "Idle",
  error: "",
};

const blog = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(blogUpdate.pending, (state) => {
        state.status = "Loading";
        state.error = "";
      })
      .addCase(blogUpdate.fulfilled, (state) => {
        state.status = "Success";
        state.error = "";
      })
      .addCase(blogUpdate.rejected, (state, action) => {
        state.status = "Fail";
        state.error = action.payload as string;
      });
  },
});

export default blog.reducer;
