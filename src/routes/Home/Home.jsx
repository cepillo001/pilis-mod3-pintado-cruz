import './Home.css';
import Locations from '../../components/Location/Locations';

const Home = () => {
  
  
    const locationes=[
    {
        country: "jujuy",
        latitude:-24.198446414154514,
        longitude:-65.31877369442178,
        temperatura:14.2,
        windspeed:4.7,
        url_photo:`https://lh5.googleusercontent.com/p/AF1QipOcmPnMjwphrcqfU6jV13fMCxjbwijHLdLcyRU=w408-h306-k-no`,
    
    },
    {
        country: "Salta",
        latitude:-24.80822305256558,
        longitud:-65.40522463294845,
        temperatura:8.4,
        windspeed:10.5,
        url_photo:`https://lh5.googleusercontent.com/p/AF1QipOae07NpO4z_sBqV4uV7LGwtBgVe-kqRg6IRFV4=w408-h306-k-no`,
    
    }]
  return (
    <>
      <div className='main-container'>

       HOLA

      </div>
    </>
  );
};

export default Home;