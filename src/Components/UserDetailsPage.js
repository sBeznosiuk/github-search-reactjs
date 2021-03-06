import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/users-selectors';
import { fetchUserDetails } from '../redux/operations';
import ReposList from './ReposList';

const UserDetailsPage = props => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchUserDetails(props.match.params.userLogin)
    );
    console.log(props.match.params.userLogin);
  }, [props, dispatch]);

  return (
    <div className='container'>
      <img
        className='details-avatar'
        src={user.avatar_url}
        alt=''
      />
      <p>
        {user.name}, {user.login}
      </p>
      <p>
        {user.followers && `Followers: ${user.followers}`}
      </p>
      <p>
        {user.following && `Following: ${user.following}`}
      </p>
      <p>{user.email && `Email: ${user.email}`}</p>
      <p>{user.location && `Location: ${user.location}`}</p>
      <p>
        {user.created_at &&
          `Join date: ${moment(user.created_at).format(
            'YYYY-MM-DD'
          )}`}
      </p>

      <ReposList />
    </div>
  );
};

export default UserDetailsPage;
