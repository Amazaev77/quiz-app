import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import 'normalize.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Authorization from './components/Authorization';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Authorization />
    </Router>
  </Provider>,
  document.getElementById('root')
);