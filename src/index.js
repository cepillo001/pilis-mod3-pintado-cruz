
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { LocationsProvider } from "./contexts/LocationsContext";
/* import { FiltersProvider } from './context/FiltersContext'; */


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <LocationsProvider>
          {/* <FiltersProvider> */}
          <App />
          {/* </FiltersProvider>*/}
        </LocationsProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
