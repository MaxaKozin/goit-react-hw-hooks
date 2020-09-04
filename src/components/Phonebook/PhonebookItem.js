import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import * as contactsOperations from '../../redux/phonebook/phonebook-operations';

import s from './Phonebook.module.css';

export default function PhonebookItem({ id, name, number }) {
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(contactsOperations.deleteContact(id));
  };
  return (
    <>
      <span>
        {name} : {number}
      </span>
      <button type="button" className={s.close} onClick={() => onDelete(id)}>
        +
      </button>
    </>
  );
}

PhonebookItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
