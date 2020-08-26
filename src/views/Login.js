import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import s from './Login.module.css';

export default function Login() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = useCallback((e) => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value)
    }
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }))
  }, [dispatch, email, password])

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h2 className={s.heading}>Log in</h2>
      <label className={s.label}>
        Email
          <input className={s.input} type="email" name="email" autoComplete="off" placeholder="Enter your e-mail" onChange={onChange} />
      </label>
      <label className={s.label}>
        Password
          <input className={s.input} type="password" name="password" autoComplete="off" placeholder="Enter your password" onChange={onChange} />
      </label>
      <button type="submit" className={s.button}>Sign in</button>
    </form>

  );
}
