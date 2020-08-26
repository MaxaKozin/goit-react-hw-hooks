import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  const onLogout = () => {
    dispatch(authOperations.logout());
  }
  return (
    <div className={s.container}>
      <span className={s.avatar}>{userName.slice(0, 1)}</span>
      <span className={s.name}>{userName}</span>
      <button className={s.button} type="button" onClick={onLogout}>Log Out</button>
    </div>
  );
}
