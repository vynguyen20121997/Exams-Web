import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import testReducer from "./test/testSlice";
import adminReducer from "./admin/adminSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: testReducer,
    admin: adminReducer,
  },
});
