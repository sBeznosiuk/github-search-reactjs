export const getQuery = state => state.users.query;

export const getUsers = state => state.users.items;

export const getUser = state => state.users.currentUser;

export const getUserRepos = state =>
  state.users.currentUserRepos;

export const getIsLoading = state => state.loading;
