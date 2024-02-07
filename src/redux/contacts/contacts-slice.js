import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addNumber: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteNumber: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});

export const { addNumber, deleteNumber } = contactsSlice.actions;
export default contactsSlice.reducer;
