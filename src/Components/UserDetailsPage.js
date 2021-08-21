import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../redux/contacts-selectors';

const UserDetailsPage = () => {
    const user = useSelector(getUsers)
    return (
        <div>
            <img src={user.avatar_url} alt="" />
            <p>{user.name}, {user.login}</p>
            <p>
                {user.followers && `Followers: ${user.followers}`}
            </p>
            <p>
                {user.following && `Following: ${user.following}`}
            </p>
            <p>
                {user.email && `Email: ${user.email}`}
            </p>
            <p>
                {user.location && `Location: ${user.location}`}
            </p>
            <p>
                {user.created_at && `Join date: ${user.created_at}`}
            </p>
        </div>
    );
}

export default UserDetailsPage;