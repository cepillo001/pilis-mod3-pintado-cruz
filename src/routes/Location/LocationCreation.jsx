
import "./LocationCreation.css";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LocationsContext } from "../../contexts/LocationsContext";
const LocationCreation = () => {
  const [tags, setTags] = useState([]);
  const { locations, setLocations } = useContext(LocationsContext)
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const locationNew ={
      country: data.country,
      latitude:data.latitude,
      longitude:data.longitude,
      temperature:data.temperature,
      windspeed:data.windspeed,
      url_photo:data.url_photo,
    }
    console.log(data);
    setLocations([...locations, locationNew])
    navigate('/')
  }

  const { register, handleSubmit, formState: { errors } } = useForm()
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="CIUDAD" {...register("country", {required: true, maxLength: 80})} />
      <input type="text" placeholder="LATITUD" {...register("latitude", {required: true})} />
      <input type="text" placeholder="LONGITUD" {...register("longitude", {required: true})} />
      <input type="text" placeholder="temperature" {...register("temperature", {required: true})} />
      <input type="text" placeholder="Velocidad del Viento" {...register("windspeed", {required: true})} />
      <input type="text" placeholder="URL FOTO" {...register("url_photo", {required: true})} />
      <input type="submit" />
    </form>
  );
}


export default LocationCreation;

