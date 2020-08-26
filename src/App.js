import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import authOperations from './redux/auth/auth-operations';
import Appbar from './components/Appbar/Appbar';
import HomeView from './views/HomeView';
import Login from './views/Login';
import Signup from './views/Signup';
import Contacts from './views/Contacts';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch])

  return (
    <>
      <Appbar />
      <Switch>
        <PublicRoute exact path="/">
          <HomeView />
        </PublicRoute>
        <PublicRoute
          path="/signup"
          restricted
          redirectTo="/phonebook"
        >
          <Signup />
        </PublicRoute>
        <PublicRoute
          path="/login"
          restricted
          redirectTo="/phonebook"
        >
          <Login />
        </PublicRoute>
        <PrivateRoute
          path="/phonebook"
          redirectTo="/login"
        >
          <Contacts />
        </PrivateRoute>
      </Switch>
    </>
  );
}



