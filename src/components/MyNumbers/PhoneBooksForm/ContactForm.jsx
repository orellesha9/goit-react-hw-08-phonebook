import { useState, useMemo, memo, useCallback } from 'react';
import styles from './contactForm.module.css';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    onSubmit({ ...state });
    reset();
  };

  const reset = useCallback(() => {
    setState({ ...INITIAL_STATE })
  }, []);

  const bookTitleID = useMemo(() => nanoid(), []);
  const bookNumberID = useMemo(() => nanoid(), []);

  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor={bookTitleID}>Name</label>
        <input
          value={name}
          onChange={handleChange}
          id={bookNumberID}
          type="text"
          name="name"
          placeholder="name"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={bookTitleID}>Number</label>
        <input
          value={number}
          required
          onChange={handleChange}
          id={bookNumberID}
          type="tel"
          name="number"
          placeholder="Number"
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

/*
class ContactForm extends Component {
  bookTitleID = nanoid();
  bookNumberID = nanoid();

  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { bookTitleID, bookNumberID, handleSubmit, handleChange } = this;

    const { name, number } = this.state;
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor={bookTitleID}>Name</label>
          <input
            value={name}
            onChange={handleChange}
            id={bookNumberID}
            type="text"
            name="name"
            placeholder="name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={bookTitleID}>Number</label>
          <input
            value={number}
            required
            onChange={handleChange}
            id={bookNumberID}
            type="tel"
            name="number"
            placeholder="Number"
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
*/
export default memo(ContactForm);
