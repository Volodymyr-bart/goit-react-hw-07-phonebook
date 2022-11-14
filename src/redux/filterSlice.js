import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts } from './operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },

  reducers: {
    setFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
