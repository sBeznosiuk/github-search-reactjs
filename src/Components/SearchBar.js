import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersSuccess } from '../redux/actions';
import { fetchUsers } from '../redux/operations';
import { useDebouncedCallback } from 'use-debounce';
import { TextField } from '@material-ui/core';

const SearchBar = () => {
  const dispatch = useDispatch();

  const debouncedfetch = useDebouncedCallback(text => {
    text
      ? dispatch(fetchUsers(text))
      : dispatch(fetchUsersSuccess({}));
  }, 300);

  const handleChange = e => {
    const { value } = e.target;

    debouncedfetch(value);
  };
  return (
    <>
      <TextField
        className='input'
        id='standard-basic'
        label='Search for users'
        type='text'
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBar;
