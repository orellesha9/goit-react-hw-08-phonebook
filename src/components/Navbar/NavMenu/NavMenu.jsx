import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import menuItems from './menuItems';
import styles from './nav.menu.module.css';
import { selectIsLogin } from '../../../redux/auth/auth-selectors';
const NavMenu = () => {
  const isLogin = useSelector(selectIsLogin);


  const filteredMenuItems = !isLogin ? menuItems.filter(item => !item.private) : menuItems;
  
  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={styles.link} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (<ul className={styles.menu}>{elements}</ul>);
};

export default NavMenu;
