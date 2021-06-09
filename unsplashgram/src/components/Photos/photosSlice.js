import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async ({ limit }) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    ).then((res) => res.json());
  }
);

export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getPhotos.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPhotos.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'success';
    },
    [getPhotos.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const {} = photosSlice.actions;

export const selectPhotos = ({ photos }) => photos;

export default photosSlice.reducer;
