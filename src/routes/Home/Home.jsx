import './Home.css';
import Locations from '../../components/Location/Locations';
import { useContext, useEffect, useState } from 'react';
import { LocationsContext } from "../../contexts/LocationsContext"


const Home = () => {

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