import "./Home.css";
import Locations from "../../components/Location/Locations";
import { useContext, useEffect, useState } from "react";
import { LocationsContext } from "../../contexts/LocationsContext";
import SearchLocation from "../../components/Search/SearchLocation";
import { FiltersContext } from "../../contexts/FiltersContext";



const Home = () => {
  const { filters, setFilters } = useContext(FiltersContext);
  const { locations,setLocations } = useContext(LocationsContext);


  const filteredLocations = locations.filter((location) => {
    //setLocations(data)      "paso la info a locations"
  });

  useEffect(() => {
    setFilters(locations)
  })

  return (
    <>
      <div className="main-container">
        <div className="nav-searcher">
           <SearchLocation /> 
        </div>
        HOLA
        <Locations locations={filters}></Locations>
      </div>
    </>
  );
};

export default Home;
