import { Link } from 'react-router-dom';

import {  useSelector } from 'react-redux';



import styles from './navbar.module.css';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavMenu from '../NavMenu/NavMenu';
import NavbarUser from '../NavbarUser/NavbarUser';

import { selectIsLogin } from '../../../redux/auth/auth-selectors';

const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <navbar className={styles.navbar}>
      <Link to="/">Logo</Link>
      <NavMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </navbar>
  );
};

export default Navbar;
