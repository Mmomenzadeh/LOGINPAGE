import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userDetailsFetch } from "../../Api/Services/User";


export const GetSingleUser = createAsyncThunk("fetch/SingleUser", async (id) => {

  try {

    const res = await userDetailsFetch(id);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

const singleUserSlice = createSlice({
  name: "single/user",
  initialState: {
    userData: [],
    status: "idle",
  },

  extraReducers: (builder) => {
    builder.addCase(GetSingleUser.pending, (state) => {
      return {
        ...state,
        status: "pending",
      };
    });
    builder.addCase(GetSingleUser.rejected, (state) => {
      return {
        ...state,
        status: "rejected",
      };
    });
    builder.addCase(GetSingleUser.fulfilled, (state, action) => {
      return {
        ...state,
        status: "fulfilled",
        userData: action.payload,
      };
    });
  },
});

export default singleUserSlice.reducer;
