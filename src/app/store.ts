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
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
// import searchBarReducer from '../components/searchBar/searchBarSlice';
// import homeCardsReducer from '../components/homeCard/homeCardsSlice';
// import formReducer from '../components/Form/formSlice';

// const rootReducer = combineReducers({
//   searchBarValue: searchBarReducer,
//   homeCards: homeCardsReducer,
//   formData: formReducer,
// });

// // export default configureStore({
// //   reducer: rootReducer,
// // });

// export default function setupStore(preloadedState?: PreloadedState<RootState>) {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState,
//   });
// }

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore['dispatch'];
