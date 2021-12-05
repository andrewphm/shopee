import { loginStart, loginFailure, loginSuccess } from './userRedux';

import { publicRequest } from '../API';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  let res;
  try {
    res = await publicRequest.post('/auth/signin', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }

  return res.data;
};
