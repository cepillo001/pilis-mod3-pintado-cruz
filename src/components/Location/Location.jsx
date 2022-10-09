import { useContext } from "react";
import { LocationsContext } from "../../contexts/LocationsContext";
import "./Location.css";
import { BsTrash } from "react-icons/bs";

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
        <img className="imagentamanio" src={url_photo} alt="" />
        <h4>{latitude}</h4>
        <h4>{longitude}</h4>
        <h4>{temperature}</h4>
        <h4>{windspeed}</h4>
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
