import React from 'react';
import FormApp from './FormApp';
import BooksList from './BooksList';
import { useState } from 'react';
import LoadButton from './LoadButton';
import { useAppSelector } from '../hooks/hooks';
import MutationOfBooks from './MutationOfBooks';
import Modal from './Modal';
import MyModal from './MyModal/MyModal';
import ErrorApp from './ErrorApp';

function Books() {
  const isError = Boolean(useAppSelector((state) => state.error));
  const isBookArrayEmpty = Boolean(
    useAppSelector((state) => state.books.totalBooks)
  );
  return (
    <>
      <FormApp></FormApp>
      <MutationOfBooks></MutationOfBooks>
      {isError && <ErrorApp></ErrorApp>}
      <BooksList></BooksList>
      {/* <Modal></Modal> */}
      <MyModal></MyModal>
      {isBookArrayEmpty && <LoadButton></LoadButton>}
    </>
  );
}

export default Books;
