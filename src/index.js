import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PersonProvider } from './context';

const index = (
  <PersonProvider>
    <App />
  </PersonProvider>
);

ReactDOM.render(index, document.querySelector('#root'));
