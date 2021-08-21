import React from 'react';
import SearchBar from './Components/SearchBar'
import UsersList from './Components/UsersList'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserDetailsPage from './Components/UserDetailsPage';
import { useSelector } from 'react-redux';
import { getUsers } from './redux/contacts-selectors';

function App() {

  const user = useSelector(getUsers)

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={props => (
          <>
            <SearchBar {...props} />
            <UsersList {...props} />
          </>
        )} />
        <Route path={`/${user.login}`} component={UserDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
