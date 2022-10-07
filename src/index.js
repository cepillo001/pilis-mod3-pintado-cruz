import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { LocationsProvider } from './contexts/LocationsContext';
/* import { UserProvider } from './context/UserContext';
import { FiltersProvider } from './context/FiltersContext';
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <LocationsProvider>

      {/* <UserProvider>
        <FiltersProvider> */}
          <App />
        {/* </FiltersProvider>
      </UserProvider> */}
      </LocationsProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
