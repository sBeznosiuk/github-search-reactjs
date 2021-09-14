import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { getIsLoading } from './redux/users-selectors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const SearchBar = lazy(() =>
  import(
    './Components/SearchBar' /* webpackChunkName: 'SearchBar' */
  )
);

const UsersList = lazy(() =>
  import(
    './Components/UsersList' /* webpackChunkName: 'UsersList' */
  )
);

const UserDetailsPage = lazy(() =>
  import(
    './Components/UserDetailsPage' /* webpackChunkName: 'UserDetailsPage' */
  )
);

function App() {
  const isLoading = useSelector(getIsLoading);
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route
          exact
          path='/'
          render={props => (
            <div className='container'>
              <SearchBar {...props} />
              <UsersList {...props} />
            </div>
          )}
        />
        <Route
          path={'/users/:userLogin'}
          component={UserDetailsPage}
        />
      </Switch>
      {/* {isLoading && (
        <Loader type='ThreeDots' color='#00BFFF' />
      )} */}
    </Suspense>
  );
}

export default App;
