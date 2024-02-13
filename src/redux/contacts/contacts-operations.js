import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../api/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await contactsApi.requestFetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.requestAddContacts(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contacts } = getState();

      const normalizedName = name.toLowerCase();
      const normalizedPhone = number.toLowerCase();

      const dublicate = contacts.contact.find(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        const normalizedCurrentPhone = item.number.toLowerCase();

        return (
          normalizedCurrentName === normalizedName ||
          normalizedCurrentPhone === normalizedPhone
        );
      });
      if (dublicate) {
        alert(`${name} is already in contacts.`);
        return false;
      }
    },
  }
);

// export const addContact = body => {
//   const func = async dispatch => {
//     try {
//       dispatch(addContactLoading());
//       const data = await contactsApi.requestAddContacts(body);
//       dispatch(addContactSuccess(data));
//     } catch (error) {
//       dispatch(addContactError(error.message));
//     }
//   };
//   return func;
// };

export const deleteNumber = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.requestDeleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
