import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home';
import LocationDisplay from './routes/Location/LocationDisplay';
import { useContext, useEffect} from 'react';
//import { getLocations } from './service';
//import { LocationsContext} from './contexts/LocationsContext';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';
import LocationCreation from './routes/Location/LocationCreation';

function App() {


  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='location/:id' element={<LocationDisplay/>}/>
            <Route path='location/create' element={<LocationCreation/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;