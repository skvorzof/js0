import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getPhotos, selectPhotos } from './photosSlice';

export const Photos = () => {
  const photos = useSelector(selectPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos({ limit: 10 }));
  }, [dispatch]);

  return (
    <ul>
      {photos.list.map(({ id, title, body }) => (
        <li key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
};
