import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home';
import LocationDisplay from './routes/Location/LocationDisplay';
import { useContext, useEffect} from 'react';
// import { getColorPalettes } from './service';
// import { ColorPalettesContext} from './context/ColorPalettesContext'
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';
import LocationCreation from './routes/Location/LocationCreation';

function App() {

  // const {setColorPalettes} = useContext(ColorPalettesContext)
  
  // useEffect(()=> {
  //   getColorPalettes()
  //   .then((data) => {
  //     setColorPalettes(data);
  //   })
  //   .catch((err) => console.log(err));
  // }, [])

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