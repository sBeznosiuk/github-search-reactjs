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
  fetchUserError,
  fetchUserRequest,
  fetchUserSuccess,
  provideQuery,
} from './actions';

const itemsReducer = createReducer([], {
  [fetchUserSuccess]: (_, { payload }) => payload,
});

const queryReducer = createReducer('', {
  [provideQuery]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchUserRequest]: () => true,
  [fetchUserSuccess]: () => false,
  [fetchUserError]: () => false,
});



const usersReducer = combineReducers({
  items: itemsReducer,
  query: queryReducer,
});

const rootReducer = combineReducers({
  users: usersReducer,
  loading,
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
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
