import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { GlobalCSS } from './GlobalStyles.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/webdeveloper-honcharov/">
      <GlobalCSS/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
