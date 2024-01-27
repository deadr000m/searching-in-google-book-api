import { createSlice } from '@reduxjs/toolkit';

interface IMutate {
  filter: string;
}

const initialState: IMutate = {
  filter: '',
};

const mutateSlice = createSlice({
  name: 'mutation',
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = mutateSlice.actions;

export default mutateSlice.reducer;
