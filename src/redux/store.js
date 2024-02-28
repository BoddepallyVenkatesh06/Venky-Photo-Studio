import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import emailReducer from "./slices/emailSlice";
import modalReducer from "./slices/modalSlice";
import sidebarReducer from "./slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    email: emailReducer,
    modal: modalReducer,
    sidebar: sidebarReducer
  },
});
