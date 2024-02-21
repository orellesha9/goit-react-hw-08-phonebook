import { nanoid } from 'nanoid';

const menuItems = [
  {
    id: nanoid(),
    to: "/",
    text: "Home page",
    private: false,
  },
  {
    id: nanoid(),
    to: "/contacts",
    text: "My contacts",
    private: true,
  },

];
export default menuItems;