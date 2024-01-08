import { Component } from 'react';
import styles from './my-numbers.module.css';
import ContactForm from './PhoneBooksForm/ContactForm';
import ContactList from './PhoneBookList/ContactList';
import { nanoid } from 'nanoid';

class MyNumbers extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  isDublicate({ name, number }) {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      const normalizedCurrentNumber = item.number.toLowerCase();

      return (
        normalizedCurrentName === normalizedName &&
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
export default MyNumbers;
