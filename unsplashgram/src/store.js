import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './components/Photos/photosSlice';

export default configureStore({
  reducer: {
    photos: photosReducer,
  },
});
