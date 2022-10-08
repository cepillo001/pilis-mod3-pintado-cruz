import './Home.css';
import Locations from '../../components/Location/Locations';
import { useContext, useEffect, useState } from 'react';
import { LocationsContext } from "../../contexts/LocationsContext"
import SearchLocation from '../../components/Search/SearchLocation';
import { FiltersContext } from '../../contexts/FiltersContext';

const Home = () => {
  const { locations, setLocations } = useContext(LocationsContext)
  const { filters } = useContext(FiltersContext)

  const filteredLocations = locations.filter((location) => {


    //setLocations(data)      "paso la info a locations"


  })



  return (
    <>
      <div className='main-container'>
        
        HOLA
        
        <Locations locations={locations}></Locations>

      </div>
    </>
  );
};

export default Home;