import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { current } from './redux/auth/auth-operations';

import AppRoutes from './AppRoutes';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, );

  return (
    <div>
      {/* //   React homework template */}
      {/* <Navbar /> */}
     
      <AppRoutes />
    
      {/* <AllMyNumbers/> */}
    </div>
  );
};
