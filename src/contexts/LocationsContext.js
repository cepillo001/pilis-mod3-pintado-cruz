import { createContext, useState } from "react";

export const LocationsContext = createContext({
  locations: [],
  setLocations: () => {}
})

export const LocationsProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const value = { locations, setLocations };

  return <LocationsContext.Provider value={value}>{children}</LocationsContext.Provider>;
}