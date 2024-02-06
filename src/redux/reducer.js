import { ADD_NUMBER, DELETE_NUMBER, SET_FILTER } from './constants';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NUMBER:
      const { contacts } = state;
      return {
        contacts: [...contacts, payload],
      };
    case DELETE_NUMBER:
      const newContacts = state.contacts.filter(item => item.id !== payload);
      return {
        ...state,
        contacts: newContacts,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};

export default reducer;
