import React from 'react';
import SearchBar from './Components/SearchBar'
import UsersList from './Components/UsersList'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserDetailsPage from './Components/UserDetailsPage';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={props => (
          <>
            <SearchBar {...props} />
            <UsersList {...props} />
          </>
        )} />
        <Route component={UserDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
