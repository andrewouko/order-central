import { configureStore } from "@reduxjs/toolkit";
import search_slice_reducer from "./search_slice";
export default configureStore({
  reducer: {
    search: search_slice_reducer,
  },
});
