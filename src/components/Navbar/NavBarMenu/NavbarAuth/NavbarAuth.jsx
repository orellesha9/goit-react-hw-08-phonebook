import { NavLink } from 'react-router-dom';
import styles from './navbar-auth.module.css';
import Link from '@mui/material/Link';

const NavbarAuth = () => {
  return (
    <div className={styles.block}>
      <NavLink to="/register" className={styles.link}>
      <Link>Register</Link>
      </NavLink>
      |
      <NavLink to="/login" className={styles.link}>
        <Link>Login</Link>
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
