import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducer } from './reducer';
import { StateProvider } from './state';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider 
      reducer={reducer}
      initialState={{ filter: '', sort: null }}
    >
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

