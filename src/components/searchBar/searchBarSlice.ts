/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
  name: 'searchText',
  initialState: {
    value: '',
  },
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    setSearchBarValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchBarValue } = searchBarSlice.actions;

export default searchBarSlice.reducer;

export const selectSearchBarValue = (state: { searchBarValue: { value: string } }) =>
  state.searchBarValue.value;
