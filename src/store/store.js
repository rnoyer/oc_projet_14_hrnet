import { configureStore } from "@reduxjs/toolkit";
// Import reducers here
import employeeReducer from "/src/features/employeesSlice";

export default configureStore({
  reducer: {
    // Declare reducers here
    employee: employeeReducer,
  },
});
