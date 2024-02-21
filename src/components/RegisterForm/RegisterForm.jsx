import { useState, useCallback, useId } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import styles from './register-form.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = useCallback(() => {
    setState({ ...INITIAL_STATE });
  }, []);

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.block}>
        <label htmlFor={nameId}></label>
        <TextField
          value={name}
          onChange={handleChange}
          name="name"
          label="Name" variant="outlined"
          required
          id={nameId}
        />
      </div>
      <div className={styles.block}>
        <label htmlFor={emailId}></label>
        <TextField
          value={email}
          label="Email" variant="outlined"
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          required
        />
      </div>
      <div className={styles.block}>
        <label htmlFor={passwordId}></label>
        <TextField
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          label="Password" variant="outlined"
          id={passwordId}
          required
        />
      </div>
      <Button className={styles.register_btn} variant="outlined" type="submit">Register</Button>
    </form>
  );
};
export default RegisterForm;
