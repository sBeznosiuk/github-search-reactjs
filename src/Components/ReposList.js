import { TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUser,
  getUserRepos,
} from '../redux/contacts-selectors';
import { fetchUserRepos } from '../redux/operations';

const ReposList = () => {
  const [query, setQuery] = useState('');
  const user = useSelector(getUser);
  const repos = useSelector(getUserRepos);
  const dispatch = useDispatch();

  const filteredRepos = query
    ? repos.filter(repo => repo.name.includes(query))
    : repos;

  useEffect(() => {
    dispatch(fetchUserRepos(user.login));
  }, [user, dispatch]);

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleClick = repo => {
    window.location.href = `https://github.com/${user.login}/${repo.name}`;
  };

  return (
    <div>
      <TextField
        className='input'
        id='standard-basic'
        label='Search'
        type='text'
        onChange={handleChange}
      />
      <div className='repos-list '>
        {filteredRepos.map(repo => (
          <div
            className='repos-list-item'
            style={{ border: '1px solid gray' }}
            key={repo.id}
            onClick={() => handleClick(repo)}
          >
            <p>{`Name: ${repo.name}`}</p>
            <p>{`Forks: ${repo.forks}`}</p>
            <p>{`Stars: ${repo.stargazers_count}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReposList;
