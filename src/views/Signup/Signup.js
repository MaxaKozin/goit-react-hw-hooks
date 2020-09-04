import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import authOperations from '../../redux/auth/auth-operations';

import s from './Signup.module.css';

export default function Signup() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log(new Error());
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.register({ name, email, password }));
    },
    [dispatch, email, name, password],
  );

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h2 className={s.heading}>Sign up</h2>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Enter your name"
          onChange={onChange}
        />
      </label>
      <label className={s.label}>
        Email
        <input
          className={s.input}
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Enter your e-mail"
          onChange={onChange}
        />
      </label>
      <label className={s.label}>
        Password
        <input
          className={s.input}
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Enter your password"
          onChange={onChange}
        />
      </label>
      <button type="submit" className={s.button}>
        Register
      </button>
    </form>
  );
}
