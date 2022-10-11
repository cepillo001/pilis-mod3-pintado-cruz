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
import { LocationsContext } from './contexts/LocationsContext';
import { UserContext } from './contexts/UserContext';


function App() {
  const { currentUser, setCurrentUser} = useContext(UserContext)
  const { locations, setLocations } = useContext(LocationsContext)
  useEffect(() => {
    setLocations([...locations,
      {
        id: locations.length + 1,
        country: "jujuy",
        latitude:-24.198446414154514,
        longitude:-65.31877369442178,
        temperatura:14.2,
        windspeed:4.7,
        url_photo:`https://lh5.googleusercontent.com/p/AF1QipOcmPnMjwphrcqfU6jV13fMCxjbwijHLdLcyRU=w408-h306-k-no`,
    
    }
  ])
  }, []);
  

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