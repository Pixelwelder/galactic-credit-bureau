import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import getTokenFromUrl from '../util/getTokenFromUrl';

const name = 'auth';
const initialState = {
  // { access_token, account_id, account_username, expires_in, refresh_token, token_type };
  token: null
};

const getToken = createAsyncThunk(
  `${name}/getToken`,
  async (_, { dispatch }) => {
    const token = getTokenFromUrl();
    if (token) dispatch(generatedActions.setToken(token));
  }
);

const { reducer, actions: generatedActions } = createSlice({
  name,
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    }
  }
});

const actions = { ...generatedActions, getToken };

const select = ({ auth }) => auth;
const selectors = { select };

export { actions, selectors };
export default reducer;
