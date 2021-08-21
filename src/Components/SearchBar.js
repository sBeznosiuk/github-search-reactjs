import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersSuccess  } from '../redux/actions';
import { fetchUsers } from '../redux/operations';
import {  useDebouncedCallback } from 'use-debounce';

const SearchBar = () => {
    const dispatch = useDispatch()

    const debouncedfetch = useDebouncedCallback(text => {
        text ? dispatch(fetchUsers(text)) : dispatch(fetchUsersSuccess({}))
    }, 300)

    const handleChange = e => {
        const { value } = e.target
        
        debouncedfetch(value)
    }
    return (
        <>
            <label htmlFor="">Search for user: </label>
            <input type="text" onChange={handleChange} />
        </>
    );
}

export default SearchBar;