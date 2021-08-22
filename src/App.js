import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

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
    </Suspense>
  );
}

export default App;
