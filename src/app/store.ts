import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from '../components/searchBar/searchBarSlice';
import homeCardsReducer from '../components/homeCard/homeCardsSlice';
import formReducer from '../components/Form/formSlice';

export const store = configureStore({
  reducer: {
    searchBarValue: searchBarReducer,
    homeCards: homeCardsReducer,
    formData: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: null,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
