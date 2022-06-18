import {BrowserRouter as Router} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './components/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Store>
        <Router>
          <App/>
        </Router>
      </Store>
    </CookiesProvider>
  </React.StrictMode>
);

