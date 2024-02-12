import { configureStore } from '@reduxjs/toolkit';
// import persistStore from 'redux-persist/es/persistStore';

import rootReducer from './rootReducer';



export const store = configureStore({
  reducer: rootReducer,
});




