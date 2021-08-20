import axios from 'axios';
import {
 
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
} from './actions';

axios.defaults.baseURL = 'https://api.github.com/';

export const fetchUsers = query => dispatch => {
  dispatch(fetchUserRequest())

  axios.get(`/users/${query}`)
    .then(res => dispatch(fetchUserSuccess(res.data)))
    .catch(err => dispatch(fetchUserError(err)))
}
// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');

//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }

//   // axios
//   //   .get('/items')
//   //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//   //   .catch(error => dispatch(fetchContactsError(error)));
// };

// export const addContact = contact => dispatch => {
//   dispatch(addContactRequest());

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

// export const removeContact = contactId => dispatch => {
//   dispatch(removeContactRequest());

//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(removeContactSuccess(contactId)))
//     .catch(error => removeContactError(error));
// };
