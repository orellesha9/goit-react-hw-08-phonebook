import styles from './contactList.module.css';

const ContactList = ({ items, deleteNumber }) => {
  const elements = items.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button className={styles.btn} onClick={() => deleteNumber(id)} type="button">
        Delete
      </button>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};
export default ContactList;
