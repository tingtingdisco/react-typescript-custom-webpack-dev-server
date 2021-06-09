import React, { Fragment } from 'react';
import { incrementAsync, selectAppValue } from '../store/appSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export const Button = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(selectAppValue);

  return <button onClick={() => dispatch(incrementAsync())}>{value}</button>;
};
