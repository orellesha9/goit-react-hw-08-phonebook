import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import PublicRoute from './components/PublicRoute/PublicRoute.jsx';
const HomePage = lazy(() => import('./components/pages/HomePage/HomePage.jsx'));
const MyNumbers = lazy(() => import('./components/MyNumbers/MyNumbers.jsx'));
const LoginPage = lazy(() => import('./components/pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('./components/pages/RegisterPage/RegisterPage.jsx')
);

// const MyFavoriteBooksPage = lazy(() => import("./pages/MyFavoriteBooksPage/MyFavoriteBooksPage"));
// const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() =>
  import('./components/pages/NotFoundPage/NotFoundPage.jsx')
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<MyNumbers />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
