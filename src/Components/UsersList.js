import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../redux/contacts-selectors';
import {Link} from 'react-router-dom'

const UsersList = () => {
    const users = useSelector(getUsers)
    return (
        !!users.length && users.map(user => (
            <Link to={`/users/${user.login}`}  key={user.id}>
                <div style={{ border: '1px solid black' }}>
                    <img src={user.avatar_url} alt="" />
                    <p>{user.name}, {user.login}</p>
                    <p> 
                        {user.public_repos && `Repositories: ${user.public_repos}`}  
                    </p>
                </div>
            </Link>
        ))
    );
}

export default UsersList;