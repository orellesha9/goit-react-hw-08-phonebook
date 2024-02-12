import { useCallback, useMemo, useEffect } from 'react';
import styles from './my-numbers.module.css';
import ContactForm from './PhoneBooksForm/ContactForm';
import ContactList from './PhoneBookList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllNumbers } from '../../redux/contacts/constacts-selectors';
import { setFilter } from '../../redux/filter/filter-slice';
import {
  fetchContacts,
  addContact,
  deleteNumber,
} from '../../redux/contacts/contacts-operations.js';

const MyNumbers = () => {
  const { contacts, isLoading, error } = useSelector(selectAllNumbers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isDublicate = useMemo(() => {
    return ({ name, number }) => {
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number.toLowerCase();

      const dublicate = contacts.find(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        const normalizedCurrentNumber = item.number.toLowerCase();

        return (
          normalizedCurrentName === normalizedName ||
          normalizedCurrentNumber === normalizedNumber
        );
      });
      return Boolean(dublicate);
    };
  }, [contacts]);

  const onAddNumber = useCallback(
    data => {
      if (isDublicate(data)) {
        return alert(`${data.name} is already in contacts.`);
      }

      dispatch(addContact(data));
    },
    [dispatch, isDublicate]
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
        {Boolean(contacts.length) && (
          <ContactList items={contacts} deleteNumber={onDeleteNumber} />
        )}
      </div>
    </div>
  );
};

export default MyNumbers;
