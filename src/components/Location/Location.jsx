
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
          <img className='imagentamanio' src={url_photo} alt="" />
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
  