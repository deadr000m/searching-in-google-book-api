import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchBooks } from '../redux/slices/booksSlice';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

function LoadButton() {
  const searchedBook = useAppSelector((state) => state.books.searchedTitle);
  const [quantaty, setQuantaty] = useState<number>(18);
  const isLoading = useAppSelector((state) => state.books.isLoading);
  const sortBy = useAppSelector((state) => state.mutation.sort);
  const dispatch = useAppDispatch();
  return (
    <div
      className="app-button-getmore"
      onClick={() => {
        setQuantaty(quantaty + 18);
        dispatch(
          fetchBooks({
            searchString: searchedBook,
            startIndex: quantaty,
            sorting: sortBy,
          })
        );
      }}
    >
      {isLoading ? (
        <ThreeDots
          visible={true}
          height="20"
          width="40"
          color="#343a40"
          radius="3"
          ariaLabel="three-dots-loading"
        />
      ) : (
        <span>Показать еще</span>
      )}
    </div>
  );
}

export default LoadButton;
