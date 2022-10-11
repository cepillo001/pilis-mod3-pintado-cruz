import { useContext } from "react";
import { LocationsContext } from "../../contexts/LocationsContext";
import "./Location.css";
import { BsTrash ,BsThermometerHalf,BsWind} from "react-icons/bs";

const Location = ({ location }) => {
  const { locations, setLocations } = useContext(LocationsContext);
  const {
    id,
    country,
    latitude,
    longitude,
    temperature,
    windspeed,
    url_photo,
  } = location;

  //renderiza las tarjetas de las localidades cuyo id sea distinto del que se elimino
  const handleAnchorClick = () => {
    const filteredItems = locations.filter(function(item)
    {
      return item.id != id;
    });
    setLocations(filteredItems);
  }

  return (
    <div className="location-container">
      <div className="location">
        <h3>{country}</h3>
        <div className="target">
          <img className="imagentamanio" src={url_photo} alt="" />
          <div className="targetderecha" >
            <h4>latitud :  {latitude}</h4>
            <h4>longitud :  {longitude}</h4>
            <h4>temperatura <BsThermometerHalf></BsThermometerHalf> :{temperature}°C</h4>
            <h4>velocidad del <BsWind></BsWind> : {windspeed}km/h</h4>
          </div>
        </div>
        
      </div>
      <div className="location-actions">
        <div className="fav">
          <BsTrash className="trash" onClick={() => handleAnchorClick()} value={country} />
        </div>
      </div>
    </div>
  );
};

export default Location;
