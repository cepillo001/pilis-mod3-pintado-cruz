
import './Location.css';

const Location = ({ location }) => {
    const { 
        country,
        latitude,
        longitude,
        temperature,
        windspeed,
        url_photo} = location
  
    return (
      <div className='palette-container'>
        <div className='palette'>
          <h3>{country}</h3>
          <img src="https://media.prensa.jujuy.gob.ar/p/eb73af988df16aa04adada4551e3ad96/adjuntos/301/imagenes/000/344/0000344408/412x232/smart/turistas-jujuy-plaza-belgranojpeg.jpeg" alt="" />
          <h4>{latitude}</h4>
          <h4>{longitude}</h4>
          <h4>{temperature}</h4>
          <h4>{windspeed}</h4>
        </div>
        <div className='palette-actions'>
          <div className='fav' >
            X
          </div>
          
        </div>
  
      </div>
    );
  }
  
  export default Location
  