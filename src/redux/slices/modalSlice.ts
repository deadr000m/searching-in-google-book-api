import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IChosedBook {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  img: string;
}
interface IModal {
  isBookChosed: boolean;
  chosedBook: IChosedBook | null;
}

const initialState: IModal = {
  isBookChosed: false,
  chosedBook: null,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    choseBook: (state, action: PayloadAction<IChosedBook>) => {
      state.isBookChosed = true;
      state.chosedBook = { ...action.payload };
    },
    deleteChosenBook: (state) => {
      state.isBookChosed = false;
      state.chosedBook = null;
    },
  },
});

export const { choseBook, deleteChosenBook } = modalSlice.actions;
export default modalSlice.reducer;
