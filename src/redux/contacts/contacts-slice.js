import { createSlice } from '@reduxjs/toolkit';

// import { nanoid } from 'nanoid';
// import { fetchContacts } from './contacts-operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const loadingReducer = state => {
  state.isLoading = true;
  state.error = null;
};
const errorReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContactsLoading: loadingReducer,
    fetchContactsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
    },
    fetchContactsError: errorReducer,
    addContactLoading: loadingReducer,
    addContactSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.contacts.push(payload);
    },
    addContactError: errorReducer,
    deleteNumberLoading: loadingReducer,
    deleteNumberSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    deleteNumberError: errorReducer,
  },
});

export const {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactLoading,
  addContactSuccess,
  addContactError,
  deleteNumberLoading,
  deleteNumberError,
  deleteNumberSuccess,
} = contactsSlice.actions;
export default contactsSlice.reducer;
