import React from 'react';
import { useSelector } from 'react-redux';

import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import PhonebookItem from './PhonebookItem';

import s from './Phonebook.module.css';

export default function Phonebook() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <>
      {contacts && (
        <ul className={s.list}>
          {contacts.map(contact => (
            <li className={s.item} key={contact.id}>
              <PhonebookItem {...contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
