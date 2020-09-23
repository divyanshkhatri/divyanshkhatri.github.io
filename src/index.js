import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/ps-b.ttf';
import './fonts/me-r.otf';
import './fonts/me-ub.otf';


ReactDOM.render(
  <React.StrictMode>
    <App style = {{backgroundColor: 'black'}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();