import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from '../components/searchBar/searchBarSlice';

export default configureStore({
  reducer: {
    searchBarValue: searchBarReducer,
  },
});
