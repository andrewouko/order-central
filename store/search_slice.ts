import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "@/types";

// slice
const initial_state: SearchState = {
  searchItems: [],
};
export const search_slice = createSlice({
  name: "search",
  initialState: initial_state,
  reducers: {
    setSearchItems: (
      state: SearchState,
      action: { payload: Array<number> }
    ) => {
      state.searchItems = action.payload;
    },
  },
});

// selectors
export const selectSearch = (state: SearchState) => state.searchItems;

// actions
export const { setSearchItems } = search_slice.actions;

// reducer
export default search_slice.reducer;
