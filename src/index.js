import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store/store';
import axios from 'axios';

axios.defaults.baseURL = 'https://back-countries-qid0-dev.fl0.io/';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


