import { createSlice,current } from '@reduxjs/toolkit';

const initialState = {
  url: {
    name: 'jitendra',
  },
  genres: {},
  favoriteMovies: [],
};

export const homeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
    saveMovieIntoFavorites: (state, action) => {
      state.favoriteMovies?.push(action.payload);
    },
    removeMovieFromFavorites: (state, action) => {
     console.log("favoriteMovies == ", current(state.favoriteMovies));
     
     state.favoriteMovies = state.favoriteMovies?.filter(isEqual(item,action))
    }
  },
});

function isEqual(item,action){
  return item.id !== action.payload.id
}

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres, saveMovieIntoFavorites,removeMovieFromFavorites } =
  homeSlice.actions;

export default homeSlice.reducer;
