import { createAction } from '@reduxjs/toolkit';

export const fetchUserRequest = createAction(
  'user/fetchUserRequest',
);
export const fetchUserSuccess = createAction(
  'user/fetchUserSuccess',
);
export const fetchUserError = createAction('user/fetchUserError');

export const provideQuery = createAction('user/provideQuery')