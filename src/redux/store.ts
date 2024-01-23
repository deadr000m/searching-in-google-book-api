import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';
import errorReducer from './slices/errorSlice';
import mutateRuducer from './slices/mutateSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    error: errorReducer,
    mutation: mutateRuducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
