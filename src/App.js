import React from 'react';
import SearchBar from './Components/SearchBar'
import UsersList from './Components/UsersList'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' render={props => (
          <>
            <SearchBar {...props} />
            <UsersList {...props} />
          </>
        )} />
      </Switch>
    </Router>
  );
}

export default App;
