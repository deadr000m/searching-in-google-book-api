import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FormApp from './components/FormApp';
import BooksList from './components/BooksList';
import { useAppDispatch } from './hooks/hooks';
import { fetchBooks } from './redux/slices/booksSlice';
import Books from './components/Books';

function App() {
  // const [quantaty, setQuantaty] = useState<number>(18);
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      <Header></Header>
      <Books></Books>

      {/* <FormApp></FormApp>
      <BooksList></BooksList>
      <div
        className="app-button-getmore"
        onClick={() => {
          setQuantaty(quantaty + 18);
          dispatch(
            fetchBooks({
              searchString: 'react',
              startIndex: quantaty,
            })
          );
        }}
      >{}
        Загрузить еще...
      </div> */}
    </div>
  );
}

export default App;
