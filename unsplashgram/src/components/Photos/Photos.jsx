import React, { useEffect } from 'react';

import { unsplash } from '../../api';

import { useDispatch, useSelector } from 'react-redux';
import { getPhotos, selectPhotos, setLikePhoto } from './photosSlice';

export const Photos = () => {
  const photos = useSelector(selectPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos(unsplash));
  }, [dispatch]);

  console.log(photos);
  const handleSetLike = (id) => {
    console.log(id);
    dispatch(setLikePhoto(unsplash, id));
  };

  return (
    <ul>
      {photos.data.map(({ id, urls, likes, user, links }) => (
        <li key={id}>
          <img src={urls.thumb} alt="" />
          <span>{user.username} </span>
          <span>{likes} </span>
          <span>{links.html} </span>
          <button onClick={() => handleSetLike(id)}>+ like</button>
        </li>
      ))}
    </ul>
  );
};
