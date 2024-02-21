import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { current } from './redux/auth/auth-operations';

import AppRoutes from './AppRoutes';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div>
      {/* //   React homework template */}
      {/* <Navbar /> */}
      <BrowserRouter basename='goit-react-hw-08-phonebook'>
      <AppRoutes />
      </BrowserRouter>
      {/* <AllMyNumbers/> */}
    </div>
  );
};
