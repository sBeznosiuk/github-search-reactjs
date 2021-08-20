import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './Components/SearchBar'
import { getQuery, getUsers } from './redux/contacts-selectors';
import { fetchUsers } from './redux/operations';

function App() {
  const users = useSelector(getUsers)
  const query = useSelector(getQuery)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchUsers(query))
  //   console.log(users)
  // }, [query])
  return (
    <>
      <SearchBar />
      <button type='button' onClick={() => {
        dispatch(fetchUsers(query))
        console.log(users)
      }}>button</button>
      {
        <div key={users.id}>
          <img src={users.avatar_url} alt="" />
          <p>{users.login}, {users.name}</p>
          <p>{'Repositories' + users.public_repos}</p>
        </div>
      }
    </>
  );
}

export default App;
