import React from 'react';
import styles from './Phonebook.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/phonebook/phonebook-operations';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';

export default function Phonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const onDelete = (id) => {
    dispatch(contactsOperations.deleteContact(id))
  }

  return (
    <>
      {contacts && (<ul className={styles.list}>
        {contacts.map(({ name, number, id }) => (
          name && (<li className={styles.item} key={id}>
            <span>{name} : {number}</span>
            <button type="button" className={styles.close} onClick={() => onDelete(id)}>+</button>
          </li>)

        ))}
      </ul>)}
    </>
  )
}


