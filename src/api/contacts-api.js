import axios from 'axios';
// import { requestContacts } from '../components/MyNumbers/api/contacts-api';

const contactsInstance = axios.create({
  baseURL: 'https://65c7ecfbe7c384aada6f17d2.mockapi.io/api/contacts',
});

export const requestFetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await contactsInstance.post('/', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
} ;
