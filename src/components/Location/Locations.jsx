import Location from "./Location";
import './Locations.css'

const Locations = ({ locations }) => {
  return (
    <div className='grid'>
      {locations.map((location) => (
        <Location key={location.id} location={location} />
      ))}
    </div>
  );
}

export default Locations;