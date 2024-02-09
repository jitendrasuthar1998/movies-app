import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: {
    name:"jitendra"
  },
  geners: {},
};

export const homeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGeneres: (state, action) => {
      state.geners = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGeneres } = homeSlice.actions;

export default homeSlice.reducer;
