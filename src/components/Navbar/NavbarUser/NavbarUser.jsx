import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';

import { logout } from '../../../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import styles from './navbar-user.module.css';

const NavbarUser = () => {
  const { name } = useSelector(selectUser);
console.log(name);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={styles.block}>
      {name} |
      <Button onClick={onLogout} className={styles.logout_button}>Logout</Button>
    </div>
  );
};

export default NavbarUser;
