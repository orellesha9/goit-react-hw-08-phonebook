import { nanoid } from 'nanoid';
import { ADD_NUMBER, DELETE_NUMBER, } from './contacts-constants';

export const addNumber = payload => {
  return {
    type: ADD_NUMBER,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};

export const deleteNumber = payload => {
  return {
    type: DELETE_NUMBER,
    payload,
  };
};