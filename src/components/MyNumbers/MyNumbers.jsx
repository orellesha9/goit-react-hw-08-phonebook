import { useCallback, useEffect } from 'react';
import styles from './my-numbers.module.css';
import ContactForm from './PhoneBooksForm/ContactForm';
import ContactList from './PhoneBookList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterContacts } from '../../redux/contacts/constacts-selectors';
import { setFilter } from '../../redux/filter/filter-slice';
import {
  fetchContacts,
  addContact,
  deleteNumber,
} from '../../redux/contacts/contacts-operations.js';

const MyNumbers = () => {
  const { contact, isLoading, error } = useSelector(selectFilterContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddNumber = useCallback(
    data => {
      dispatch(addContact(data));
    },
    [dispatch]
  );

  const onDeleteNumber = useCallback(
    id => {
      dispatch(deleteNumber(id));
    },
    [dispatch]
  );

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={onAddNumber} />
      <div className={styles.listWrapper}>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          name="filter"
          onChange={changeFilter}
          placeholder="Search"
        ></input>
        {isLoading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {Boolean(contact.length) && (
          <ContactList items={contact} deleteNumber={onDeleteNumber} />
        )}
      </div>
    </div>
  );
};

export default MyNumbers;
