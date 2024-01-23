import React from 'react';
import { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { useAppSelector } from '../hooks/hooks';
import { setSorting } from '../redux/slices/mutateSlice';
import { setFilter } from '../redux/slices/mutateSlice';
import { fetchBooks } from '../redux/slices/booksSlice';

function MutationOfBooks() {
  const dispatch = useAppDispatch();
  const isBooksEmpty = !Boolean(
    useAppSelector((state) => state.books.books).length
  );
  const mutation = useAppSelector((state) => state.mutation);

  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    'all',
    'art',
    'biography',
    'computers',
    'history',
    'medical',
    'poetry',
  ];
  const sortOptions = ['relevance', 'newest'];
  return (
    <div className="app-mutate-book">
      <div>
        <label htmlFor="select">Офильтровать полученные данные: </label>
        <select
          id="select"
          value={mutation.filter}
          onChange={(e) => {
            dispatch(setFilter(e.target.value));
          }}
        >
          {filterOptions.map((item) => {
            return item === 'all' ? (
              <option value="">{item}</option>
            ) : (
              <option value={item}>{item}</option>
            );
          })}
        </select>
      </div>
      {/* <div>
        <label htmlFor="select">Вид сортировки запроса: </label>
        <select
          id="select"
          value={mutation.sort}
          onChange={(e) => {
            dispatch(setSorting(e.target.value));
          }}
        >
          <option value="">{sortOptions[0]}</option>
          <option value="&orderBy=newest">{sortOptions[1]}</option>
        </select>
      </div> */}
    </div>
  );
}

export default MutationOfBooks;
