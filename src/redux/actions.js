import { createAction } from '@reduxjs/toolkit';

export const fetchUsersRequest = createAction(
  'user/fetchUsersRequest'
);
export const fetchUsersSuccess = createAction(
  'user/fetchUsersSuccess'
);
export const fetchUsersError = createAction(
  'user/fetchUsersError'
);

export const fetchUserDetailsRequest = createAction(
  'user/fetchUserRequest'
);
export const fetchUserDetailsSuccess = createAction(
  'user/fetchUserSuccess'
);
export const fetchUserDetailsError = createAction(
  'user/fetchUserError'
);

export const fetchUserReposRequest = createAction(
  'user/fetchUserReposRequest'
);

export const fetchUserReposSuccess = createAction(
  'user/fetchUserReposSuccess'
);

export const fetchUserReposError = createAction(
  'user/fetchUserReposError'
);
