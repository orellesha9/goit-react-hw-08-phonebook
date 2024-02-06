import { ADD_NUMBER, DELETE_NUMBER } from './contacts-constants';

const initialState = [];

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NUMBER:
      return [...state, payload];
    case DELETE_NUMBER:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

export default contactsReducer;
