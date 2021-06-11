import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getTokenFromUrl from '../util/getTokenFromUrl';
import { imgurConfig } from '../config';

const name = 'auth';
const initialState = {
  // { access_token, account_id, account_username, expires_in, refresh_token, token_type };
  token: null,
  avatar: null
};

const getToken = createAsyncThunk(
  `${name}/getToken`,
  async (_, { dispatch }) => {
    const token = getTokenFromUrl();
    if (token) {
      dispatch(generatedActions.setToken(token));
      await dispatch(getAvatar());
    }
  }
);

const getAvatar = createAsyncThunk(
  `${name}/getAvatar`,
  async (_, { dispatch, getState }) => {
    const { token } = select(getState());
    if (!token) throw new Error('No token');

    const avatars = await fetch(
      `${imgurConfig.apiUrl}/${token.account_username}/avatar`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token.access_token}` }
      }
    );
    const { data } = await avatars.json();
    dispatch(generatedActions.setAvatar(data.avatar));
  }
)

const { reducer, actions: generatedActions } = createSlice({
  name,
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    }
  }
});

const actions = { ...generatedActions, getToken };

const select = ({ auth }) => auth;
const selectors = { select };

export { actions, selectors };
export default reducer;
