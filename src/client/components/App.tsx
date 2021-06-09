import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store/store';
import { Button } from './Button';

export const App = () => {
  return (
    <Provider store={store}>
      <Button />
    </Provider>
  );
};
