import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from '../components/searchBar/searchBarSlice';
import homeCardsReducer from '../components/homeCard/homeCardsSlice';
import formReducer from '../components/Form/formSlice';

export default configureStore({
  reducer: {
    searchBarValue: searchBarReducer,
    homeCards: homeCardsReducer,
    formData: formReducer,
  },
});
