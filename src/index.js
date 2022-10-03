import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { FiltersProvider } from './contexts/FiltersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <FiltersProvider>
          <App />
        </FiltersProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
