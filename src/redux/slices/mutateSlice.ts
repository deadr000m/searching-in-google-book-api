import { createSlice } from '@reduxjs/toolkit';

interface IMutate {
  filter: string;
  sort: string;
}

const initialState: IMutate = {
  filter: '',
  sort: 'relevance',
};

const mutateSlice = createSlice({
  name: 'mutation',
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSorting: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setFilter, setSorting } = mutateSlice.actions;

export default mutateSlice.reducer;
