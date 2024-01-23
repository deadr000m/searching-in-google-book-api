import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { setError } from './errorSlice';
import { AxiosError } from 'axios';
// interface IBook {
//   title: string;
//   author: string;
//   year: number;
// }

interface BooksState {
  books: Array<any>;
  totalBooks: number;
  isLoading: boolean;
  searchedTitle: string;
  sortingType: string;
}

interface IFetch {
  searchString: string;
  startIndex: number;
  sorting: string;
}

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (param: IFetch, thunkAPI) => {
    try {
      let resp = await axios.get(
        'https://www.googleapisbla.com/books/v1/volumes?q=' +
          param.searchString +
          '&startIndex=' +
          param.startIndex +
          '&orderBy=' +
          param.sorting +
          '&maxResults=18&key=AIzaSyDSeioPMek4P6-xWu200SbMxousBp-bNuo'
      );
      return resp.data;
    } catch (error) {
      const e = error as AxiosError;
      thunkAPI.dispatch(setError(e.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState: BooksState = {
  books: [],
  isLoading: false,
  totalBooks: 0,
  searchedTitle: '',
  sortingType: '',
};
const booksSlice = createSlice({
  initialState: initialState,
  name: 'books',
  reducers: {
    setSerchedString: (state, action) => {
      state.searchedTitle = action.payload;
    },
    setSortingType: (state, action) => {
      state.sortingType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = [...state.books, ...action.payload.items];
      state.totalBooks = action.payload.totalItems;
      state.isLoading = false;
    });
  },
  //   extraReducers: {
  //     [fetchBooks.pending.type]: (state: RootState) => {
  //       state.isLoading = true;
  //     },
  //     [fetchBooks.fulfilled.type]: (
  //       state: RootState,
  //       action: PayloadAction<any[]>
  //     ) => {
  //       state.isLoadingViaAPI = false;
  //       state.books = action.payload;
  //     },
  //     [fetchBooks.rejected.type]: (state: RootState) => {
  //       state.isLoading = false;
  //     },
  //   },
});

export default booksSlice.reducer;
export const { setSerchedString, setSortingType } = booksSlice.actions;
