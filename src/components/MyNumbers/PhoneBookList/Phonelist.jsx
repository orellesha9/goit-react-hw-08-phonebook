import styles from './phonelist.module.css';

const PhoneList = ({ items }) => {
  const elements = items.map(({ id, name, number }) =>
    <li key={id}>
      {name}:{number}
    </li>
  );
  return (
    <div className={styles.wrapper}>
      <ul>{elements}</ul>
    </div>
  );
};
export default PhoneList;
