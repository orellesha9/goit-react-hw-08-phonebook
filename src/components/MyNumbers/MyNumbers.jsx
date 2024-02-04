import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styles from './my-numbers.module.css';
import ContactForm from './PhoneBooksForm/ContactForm';
import ContactList from './PhoneBookList/ContactList';
import { nanoid } from 'nanoid';
import { UseSelector, useSelector } from 'react-redux';
import store from '../../redux/store';

const MyNumbers = () => {
const contacts = useSelector(store => store.contacts);

  // const [contacts, setContacts] = useState(() => {
  //   const data = JSON.parse(localStorage.getItem('my-numbers'));
  //   return data || [];
  // });
  const [filter, setFilter] = useState('');

  // const firstRender = useRef(true);

  // useEffect(() => {
  //   if (!firstRender.current) {
  //     localStorage.setItem('my-numbers', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // useEffect(() => {
  //   firstRender.current = false;
  // }, []);

  // const isDublicate = useMemo(() => {
  //   return ({ name, number }) => {
  //     const normalizedName = name.toLowerCase();
  //     const normalizedNumber = number.toLowerCase();

  //     const dublicate = contacts.find(item => {
  //       const normalizedCurrentName = item.name.toLowerCase();
  //       const normalizedCurrentNumber = item.number.toLowerCase();

  //       return (
  //         normalizedCurrentName === normalizedName ||
  //         normalizedCurrentNumber === normalizedNumber
  //       );
  //     });
  //     return Boolean(dublicate);
  //   };
  // }, [contacts]);

  // const addNumber = useCallback(
  //   data => {
  //     if (isDublicate(data)) {
  //       return alert(`${data.name} is already in contacts.`);
  //     }
  //     setContacts(prevContacts => {
  //       const newNumber = {
  //         id: nanoid(),
  //         ...data,
  //       };
  //       return [...prevContacts, newNumber];
  //     });
  //   },
  //   [isDublicate]
  // );

  // const deleteNumber = useCallback(id => {
  //   setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
  // }, []);

  // const changeFilter = useCallback(({ target }) => setFilter(target.value), []);

  // const getFilterContacts = () => {
  //   if (!filter) {
  //     return contacts;
  //   }
  //   const normalizedFilter = filter.toLowerCase();
  //   const filterContacts = contacts.filter(({ name, number }) => {
  //     const normalizedName = name.toLowerCase();
  //     const normalizednumber = number.toLowerCase();

  //     return (
  //       normalizedName.includes(normalizedFilter) ||
  //       normalizednumber.includes(normalizedFilter)
  //     );
  //   });
  //   return filterContacts;
  // };

  // const items = getFilterContacts();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <div className={styles.listWrapper}>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input name="filter" placeholder="Search"></input>
        <ContactList items={contacts} deleteNumber={()=>{}} />
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
