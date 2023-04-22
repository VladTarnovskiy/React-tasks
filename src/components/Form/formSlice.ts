/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { CardData } from '../../types/types';

interface FormState {
  value: Array<CardData>;
}

const initialState: FormState = {
  value: [],
};

export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    addCard: (state, action) => {
      const id = state.value.length + 1;
      state.value.push({ id, ...action.payload });
    },
  },
});

export const { addCard } = formSlice.actions;

export default formSlice.reducer;

export const selectFormData = (state: { formData: FormState }) => state.formData.value;
