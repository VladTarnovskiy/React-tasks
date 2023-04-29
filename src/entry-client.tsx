/* eslint-disable no-underscore-dangle */
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { legacy_createStore as createStore, combineReducers } from 'redux';
import App from './App';
import { store } from './app/store';
// import searchBarReducer from './components/searchBar/searchBarSlice';
// import homeCardsReducer from './components/homeCard/homeCardsSlice';
// import formReducer from './components/Form/formSlice';

// const allReducers = combineReducers({
//   searchBarValue: searchBarReducer,
//   homeCards: homeCardsReducer,
//   formData: formReducer,
// });

// const store = createStore(allReducers, window.__PRELOADED_STATE__);

// delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
