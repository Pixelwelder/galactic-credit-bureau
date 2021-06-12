import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { firebaseConfig } from '../config';
import { actions as authActions } from './authSlice';

const name = 'app';
const initialState = {
  isInitialized: false
};

const init = createAsyncThunk(
  `${name}/init`,
  async (_, { dispatch }) => {
    await app.initializeApp(firebaseConfig);
    // app.auth().useEmulator('http://localhost:9099/');
    // app.functions().useEmulator('localhost', 5001);
    // app.firestore().useEmulator('localhost', 8082);
    await dispatch(authActions.init());
    dispatch(generatedActions.setIsInitialized(true));
  }
);

const { reducer, actions: generatedActions } = createSlice({
  name,
  initialState,
  reducers: {
    setIsInitialized: (state, action) => {
      state.isInitialized = action.payload;
    }
  }
});

const select = ({ app }) => app;
const selectors = { select };

const actions = { ...generatedActions, init };

export { selectors, actions };
export default reducer;
