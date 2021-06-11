import React from 'react';
import { unsplash } from '../../api';

export const Auth = () => {
  const authenticationUnsplash = (unsplash) => {
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      'public',
      'write_likes',
    ]);
    window.location.assign(authenticationUrl);
  };
  return (
    <button
      onClick={() => {
        authenticationUnsplash(unsplash);
      }}
    >
      Авторизироваться
    </button>
  );
};
