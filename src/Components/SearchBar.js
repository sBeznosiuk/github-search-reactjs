import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserSuccess, provideQuery } from '../redux/actions';
import { fetchUsers } from '../redux/operations';

const SearchBar = () => {
    const dispatch = useDispatch()

    const handleChange = e => {
        const { value } = e.target
        dispatch(provideQuery(value))

        value && dispatch(fetchUsers(value))
        !value && dispatch(fetchUserSuccess({}))
    }
    return (
        <>
            <label htmlFor="">Search for user: </label>
            <input type="text" onChange={handleChange} />
        </>
    );
}

export default SearchBar;