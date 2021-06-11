import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async (unsplash) => {
    return unsplash.photos.listPhotos(1, 3, 'latest').then((res) => res.json());
  }
);

export const setLikePhoto = createAsyncThunk(
  'photos/setLikePhoto',
  async (unsplash, id) => {
    console.log(id);
    unsplash.photos.likePhoto(id).then((res) => {
      res.json();
    });
  }
);

export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.status = 'loading photos';
    },
    [getPhotos.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success photos';
    },
    [getPhotos.rejected]: (state) => {
      state.status = 'failed photos';
    },
    // likePhoto
    [setLikePhoto.pending]: (state) => {
      state.status = 'loading like';
    },
    [setLikePhoto.fulfilled]: (state, { payload }) => {
      //   state.data = payload;
      state.status = 'success like';
    },
  },
});

export const {} = photosSlice.actions;

export const selectPhotos = ({ photos }) => photos;

export default photosSlice.reducer;
