import {
  combineReducers,
  configureStore,
  createReducer,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {
  fetchUserDetailsError,
  fetchUserDetailsRequest,
  fetchUserDetailsSuccess,
  fetchUserReposSuccess,
  fetchUsersError,
  fetchUsersRequest,
  fetchUsersSuccess,
} from './actions';

const itemsReducer = createReducer([], {
  [fetchUsersSuccess]: (_, { payload }) => payload,
});

const currentUserReducer = createReducer(
  {},
  {
    [fetchUserDetailsSuccess]: (_, { payload }) => payload,
  }
);

const currentUserReposReducer = createReducer([], {
  [fetchUserReposSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchUsersRequest]: () => true,
  [fetchUsersSuccess]: () => false,
  [fetchUsersError]: () => false,
  [fetchUserDetailsRequest]: () => true,
  [fetchUserDetailsSuccess]: () => false,
  [fetchUserDetailsError]: () => false,
});

const usersReducer = combineReducers({
  items: itemsReducer,
  currentUser: currentUserReducer,
  currentUserRepos: currentUserReposReducer,
});

const rootReducer = combineReducers({
  users: usersReducer,
  loading,
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
