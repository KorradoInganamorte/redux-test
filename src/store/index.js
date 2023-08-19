import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import customerReducer from "./CustomerSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    customer: customerReducer
  },
});
