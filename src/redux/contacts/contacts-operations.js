import * as contactsApi from '../../api/contacts-api';
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactSuccess,
  addContactLoading,
  addContactError,
  deleteNumberError,
  deleteNumberLoading,
  deleteNumberSuccess,
} from './contacts-slice';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchContactsLoading());
      const data = await contactsApi.requestFetchContacts();
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
  };
  return func;
};

export const addContact = body => {
  const func = async dispatch => {
    try {
      dispatch(addContactLoading());
      const data = await contactsApi.requestAddContacts(body);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error.message));
    }
  };
  return func;
};

export const deleteNumber = id => {
  const func = async dispatch => {
    try {
      dispatch(deleteNumberLoading());
      await contactsApi.requestDeleteContact(id);
      dispatch(deleteNumberSuccess(id));
    } catch (error) {
      dispatch(deleteNumberError(error.message));
    }
  };
  return func;
};
