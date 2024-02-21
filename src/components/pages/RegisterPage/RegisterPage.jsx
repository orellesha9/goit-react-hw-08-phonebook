import { useDispatch, useSelector } from 'react-redux';

import RegisterForm from '../../RegisterForm/RegisterForm';

import { singup } from '../../../redux/auth/auth-operations';

import {
  selectAuthLoading,
  selectAuthError,
} from '../../../redux/auth/auth-selectors';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(singup(data));
  };

  return (
    <main>
      <h1>Please Sing Up</h1>
      {authLoading && <p>.....Register in progress</p>}
      <RegisterForm onSubmit={handleSignup} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </main>
  );
};

export default RegisterPage;
