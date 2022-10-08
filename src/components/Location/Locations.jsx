import { useState, useContext } from "react";
import Location from "./Location";
import "./Locations.css";
import { FiltersContext } from "../../contexts/FiltersContext";

const Locations = ({}) => {
  const { filters, setFilters } = useContext(FiltersContext);
  console.log("es aca", filters);

  return (
    <div className="grid">
      {filters.length > 0 ? (
        filters.map((locationx) => (
          <Location key={locationx.id} location={locationx} />
        ))
      ) : (
        <div></div>
      )}
      {/* {filters.map((location) => (
         <Location key={location.id} location={location} />
       ))} */}
    </div>
  );
};

export default Locations;
