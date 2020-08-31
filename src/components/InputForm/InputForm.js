import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import * as contactsOperations from '../../redux/phonebook/phonebook-operations';

import styles from './InputForm.module.css';


export default function InputForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts)

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value)
    }
    if (name === 'number') { setNumber(value) }
  }

  const handleSubmit = useCallback(event => {
    const onSubmit = (name, number) => {
      dispatch(contactsOperations.addContact({ name, number }));
    }
    event.preventDefault();
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} Already exists`);
      reset();
      return;
    }
    onSubmit(name, number);
    reset();
  }, [contacts, dispatch, name, number])

  const reset = () => {
    setName('');
    setNumber('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="name">
        Name
          </label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        className={styles.input}
        name="name"
        value={name}
        placeholder='Name'
        autoComplete="off"
        autoFocus
      />

      <label className={styles.label} htmlFor="number">
        Number
          </label>
      <input
        id="number"
        type="text"
        onChange={handleChange}
        className={styles.input}
        name="number" value={number}
        placeholder='Phone number'
        autoComplete="off"
      />
      <button type="submit" className={styles.btn}>Add contact</button>
    </form>
  );
}
