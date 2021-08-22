import axios from 'axios';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  fetchUserDetailsRequest,
  fetchUserDetailsSuccess,
  fetchUserDetailsError,
  fetchUserReposRequest,
  fetchUserReposError,
  fetchUserReposSuccess,
} from './actions';

axios.defaults.baseURL = 'https://api.github.com';

export const fetchUsers = query => dispatch => {
  dispatch(fetchUsersRequest());

  axios
    .get(`/search/users?q=${query}`)
    .then(({ data: { items } }) => {
      dispatch(fetchUsersSuccess(items));
      console.log(items);
    })
    .catch(err => dispatch(fetchUsersError(err)));
};

export const fetchUserDetails = login => dispatch => {
  dispatch(fetchUserDetailsRequest());

  axios
    .get(`/users/${login}`)
    .then(({ data }) =>
      dispatch(fetchUserDetailsSuccess(data))
    )
    .catch(err => dispatch(fetchUserDetailsError(err)));
};

export const fetchUserRepos = login => dispatch => {
  dispatch(fetchUserReposRequest());

  axios
    .get(`/users/${login}/repos`)
    .then(({ data }) =>
      dispatch(fetchUserReposSuccess(data))
    )
    .catch(err => dispatch(fetchUserReposError(err)));
};
