import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import SingleUserSlice from "./slices/SingleUserSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    singleUser : SingleUserSlice , 
  },
});
