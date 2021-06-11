import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import authReducer from './authSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer
  }
});
