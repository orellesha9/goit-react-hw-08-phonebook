import {  useSelector } from 'react-redux';
import { selectAllNumbers } from '../../redux/contacts/constacts-selectors';

const AllMyNumbers = () => {
  const contact = useSelector(selectAllNumbers);
  console.log('render all books');
  const elements = contact.map(({ id, name, number }) => (
    <li key={id}>
      Name: {name}. Number: {number}.
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default AllMyNumbers;
