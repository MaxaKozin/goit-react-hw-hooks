import React from 'react';
import Navigation from '../Navigation/Navigation';
import LoginMenu from '../LoginMenu/LoginMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Appbar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export default function Appbar() {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated)
  return (
    <div className={s.appbar}>
      <Navigation />
      {!isAuthenticated ? <LoginMenu /> : <UserMenu />}

    </div>
  );
}