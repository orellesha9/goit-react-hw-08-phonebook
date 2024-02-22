import { useState, useCallback, useId } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import styles from './login-form.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
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

  const emailId = useId();
  const passwordId = useId();
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.block}>
        <label htmlFor={emailId}></label>
        <TextField
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          label="Email" variant="outlined"
          required
        />
      </div>
      <div className={styles.block}>
        <label htmlFor={passwordId}></label>
        <TextField
        label="Password" variant="outlined"
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          required
        />
      </div>
      <Button variant="outlined" className={styles.btn_login} type="submit">Login</Button>
    </form>
  );
};
export default LoginForm;
