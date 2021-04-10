import React from 'react';
import ReactDOM from 'react-dom';
import './styling/_general.scss';
import RoutePrivate from './routes/RoutePrivate.jsx';
import Header from './containers/Header.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <RoutePrivate />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
