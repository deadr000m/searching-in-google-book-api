import React from 'react';
import { useAppSelector } from '../hooks/hooks';

function ErrorApp() {
  const errMessage = useAppSelector((state) => state.error);
  return (
    <div className="app-error">
      <h1> You have erro with type: {errMessage}</h1>
      <h1>check your connction and refresh page!</h1>
    </div>
  );
}

export default ErrorApp;
