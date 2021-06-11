import app from 'firebase/app';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { firebaseConfig } from '../config';

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
