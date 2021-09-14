import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../redux/users-selectors';
import { useHistory } from 'react-router-dom';

const UsersList = () => {
  const users = useSelector(getUsers);
  const history = useHistory();
  const handleClick = user => {
    history.push(`/users/${user.login}`);
  };

  return (
    <div className='user-gallery'>
      {!!users.length &&
        users.map(user => (
          <div
            onClick={() => handleClick(user)}
            key={user.id}
            className='user-gallery-item'
          >
            <div>
              <img src={user.avatar_url} alt='' />
              <p>{user.login}</p>
              <p>
                {user.public_repos &&
                  `Repositories: ${user.public_repos}`}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UsersList;
