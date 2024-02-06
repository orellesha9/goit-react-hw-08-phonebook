import {  useCallback, useMemo } from 'react';
import styles from './my-numbers.module.css';
import ContactForm from './PhoneBooksForm/ContactForm';
import ContactList from './PhoneBookList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, deleteNumber } from '../../redux/contacts/contacts-actions';
import { getFilterContacts } from '../../redux/contacts/constacts-selectors';
import { setFilter } from '../../redux/filter/filter-actions';

const MyNumbers = () => {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   const data = JSON.parse(localStorage.getItem('my-numbers'));
  //   return data || [];
  // });

  // const firstRender = useRef(true);

  // useEffect(() => {
  //   if (!firstRender.current) {
  //     localStorage.setItem('my-numbers', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // useEffect(() => {
  //   firstRender.current = false;
  // }, []);

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

  const onAddNumber = useCallback(data => {
    if (isDublicate(data)) {
      return alert(`${data.name} is already in contacts.`);
    }

    const action = addNumber(data);
    dispatch(action);
  },[dispatch,isDublicate]);

  const onDeleteNumber = useCallback(id => {
    dispatch(deleteNumber(id));
  }, [dispatch]);

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
        <ContactList items={contacts} deleteNumber={onDeleteNumber} />
      </div>
    </div>
  );
};

/*
class MyNumbers extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('my-numbers'));
    if (contacts?.length) {
      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('my-numbers', JSON.stringify(this.state.contacts));
    }
  }

  isDublicate({ name, number }) {
    const { contacts } = this.state;
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
  }

  addNumber = data => {
    if (this.isDublicate(data)) {
      return alert(`${data.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => {
      const newNumber = {
        id: nanoid(),
        ...data,
      };
      return { contacts: [...contacts, newNumber] };
    });
  };

  deleteNumber = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  changeFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  getFilterContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLowerCase();
      const normalizednumber = number.toLowerCase();

      return (
        normalizedName.includes(normalizedFilter) ||
        normalizednumber.includes(normalizedFilter)
      );
    });
    return filterContacts;
  }
  render() {
    const { addNumber, deleteNumber, changeFilter } = this;
    const contacts = this.getFilterContacts();

    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={addNumber} />
        <div className={styles.listWrapper}>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input
            onChange={changeFilter}
            name="filter"
            placeholder="Search"
          ></input>
          <ContactList items={contacts} deleteNumber={deleteNumber} />
        </div>
      </div>
    );
  }
}
*/
export default MyNumbers;
