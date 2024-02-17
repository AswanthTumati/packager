import { configureStore } from '@reduxjs/toolkit';
import packagesReducer from './packagesSlice';
import searchTermReducer from './searchTermSlice';

const store = configureStore({
  reducer: {
    packages: packagesReducer,
    searchTerm: searchTermReducer,
  },
});

export default store;
