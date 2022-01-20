import { loginStart, loginFailure, loginSuccess } from './userRedux';

import API from '../API';

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await API.signInUser(user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
