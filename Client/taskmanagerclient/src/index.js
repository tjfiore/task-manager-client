import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStore(reducer, null, applyMiddleware(ReduxThunk))}>
      <App />
    </Provider>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
