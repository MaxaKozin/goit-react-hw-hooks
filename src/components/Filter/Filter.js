import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import styles from './Filter.module.css';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onInputChange = (event) => {
    return dispatch(actions.changeFilter(event.target.value));
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        Find by Name
    <input className={styles.input} type="text" value={filter} onChange={onInputChange} />
      </label>
    </div>
  );
};


