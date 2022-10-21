import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search:''
};

export const searchReducer = createSlice({
  name: "dataSearch",
  initialState,
  reducers: {
    setDataSearch: (state, action) => {
      state.search = action.payload.search;
    }
  },
});

export const { setDataSearch } = searchReducer.actions;
export const selectSearch = (state) => state.dataSearch.search;

export default searchReducer.reducer;
