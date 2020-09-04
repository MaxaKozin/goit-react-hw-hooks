import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import LoginMenu from '../LoginMenu/LoginMenu';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';

import s from './Appbar.module.css';

export default function Appbar() {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  return (
    <div className={s.appbar}>
      <Navigation />
      {!isAuthenticated ? <LoginMenu /> : <UserMenu />}
    </div>
  );
}
