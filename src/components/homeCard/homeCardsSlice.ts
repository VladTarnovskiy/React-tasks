/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UnsplashCardData } from '../../types/types';
import getDataFromApi from '../../utils/api';

interface HomeCardsInputData {
  value: string;
  pageNum: number;
  perPageNum: number;
  imgSort: string;
}

interface SliceState {
  status: string;
  error: string;
  cards: Array<UnsplashCardData>;
}

const initialState: SliceState = {
  status: '',
  error: '',
  cards: [],
};

export const fetchHomeCards = createAsyncThunk<Array<UnsplashCardData>, HomeCardsInputData>(
  'homeCards/fetchHomeCards',
  async (data: HomeCardsInputData) => {
    const response = await getDataFromApi(data.value, data.pageNum, data.perPageNum, data.imgSort);
    return response as Array<UnsplashCardData>;
  }
);

export const homeCardsSlice = createSlice({
  name: 'homeCards',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHomeCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHomeCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cards = action.payload;
      })
      .addCase(fetchHomeCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message!;
      });
  },
});

export default homeCardsSlice.reducer;

export const selectAllPosts = (state: { homeCards: { cards: Array<UnsplashCardData> } }) =>
  state.homeCards.cards;
