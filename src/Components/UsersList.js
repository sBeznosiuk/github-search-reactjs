import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../redux/contacts-selectors';

const UsersList = () => {
    const user = useSelector(getUsers)
    return (
        <div style={{border: '1px solid black'}}>
            <img src={user.avatar_url} alt="" />
            <p>{user.name}, {user.login}</p>
            <p>
                {user.public_repos && `Repositories: ${user.public_repos}`}
            </p>
        </div>
    );
}

export default UsersList;