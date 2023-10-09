import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsersService } from "../../Api/Services/Users";

export const fetchUsersList = createAsyncThunk("users/fetchList", async () => {
  try {
    const res = await fetchUsersService();

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

const userSlice = createSlice({
  name: "users/list",
  initialState: {
    usersData: [],
    status: "idle",
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsersList.pending, (state) => {
      return { ...state, status: "pending" };
    });
    builder.addCase(fetchUsersList.rejected, (state) => {
      return {
        ...state,
        status: "rejected",
        usersData: [],
      };
    });

    builder.addCase(fetchUsersList.fulfilled, (state, action) => {
      return {
        ...state,
        usersData: action.payload,
        status: "fulfilled",
      };
    });
  },
});

export default userSlice.reducer;
