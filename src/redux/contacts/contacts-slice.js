import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteNumber, addContact } from './contacts-operations';

// import { nanoid } from 'nanoid';
// import { fetchContacts } from './contacts-operations';

const pending = state => {
  state.isLoading = true;
  state.error = null;
};
const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  contact: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contact = payload;
      })
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contact.push(payload);
      })
      .addCase(deleteNumber.pending, pending)
      .addCase(deleteNumber.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contact = state.contact.filter(({ id }) => id !== payload);
      })
      .addCase(deleteNumber.rejected, rejected);
  },
});


export default contactsSlice.reducer;
