import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>                 
    <App />
  </React.StrictMode>
);     // StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants. StrictMode does not render any visible UI. It only activates additional checks and warnings for its descendants.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 //reportWebVitals is a function that can be used to measure the performance of a React application. It can be used to log results to the console or send them to an analytics endpoint.