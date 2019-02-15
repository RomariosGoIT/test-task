import React from 'react';
import ReactDOM from 'react-dom';
import { PersonProvider } from './context';
import App from './App';

const index = (
  <PersonProvider>
    <App />
  </PersonProvider>
);

ReactDOM.render(index, document.querySelector('#root'));
