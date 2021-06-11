import { createSelector, createSlice } from '@reduxjs/toolkit';

const name = 'auth';
const initialState = {
  // { access_token, account_id, account_username, expires_in, refresh_token, token_type };
  token: null
};

const { reducer, actions: generatedActions } = createSlice({
  name,
  initialState
});

const actions = { ...generatedActions };

const select = ({ auth }) => auth;
const selectors = { select };

export { actions, selectors };
export default reducer;
