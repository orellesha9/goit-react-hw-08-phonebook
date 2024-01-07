import { Component } from 'react';
import styles from './my-numbers.module.css';
import PhoneBooksForm from './PhoneBooksForm/PhoneBooksForm';
import PhoneList from './PhoneBookList/Phonelist';
import { nanoid } from 'nanoid';

class MyNumbers extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  render() {
    const { contacts } = this.state;
    return (
      <div className={styles.wrapper}>
        <PhoneBooksForm />
        <PhoneList items={contacts} />
      </div>
    );
  }
}
export default MyNumbers;
