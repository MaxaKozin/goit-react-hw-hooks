import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../redux/phonebook/phonebook-operations'
import InputForm from '../components/InputForm/InputForm';
import Filter from "../components/Filter/Filter";
import Phonebook from '../components/Phonebook/Phonebook';
import Container from '../components/Container/Container';
import { getIsLoading } from '../redux/phonebook/phonebook-selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch])

  return (
    <>
      <Container title='Phonebook'>
        <InputForm />
      </Container>
      <Container title='Contacts'>
        <Filter />
        {isLoadingContacts && (<h2> Loading contacts...</h2>)}
        < Phonebook />
      </Container>
    </>
  );
}


