import React from 'react';
import { useDispatch } from 'react-redux';
import { provideQuery } from '../redux/actions';

const SearchBar = () => {
    const dispatch = useDispatch()

    const handleChange = e => {
        const { value } = e.target
        dispatch(provideQuery(value))
    }
    return (
        <>
            <label htmlFor="">Search for user: </label>
            <input type="text" onChange={handleChange} />
        </>
    );
}

export default SearchBar;