
import "./LocationCreation.css";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LocationsContext } from "../../contexts/LocationsContext";
import {getLocations} from "../../service"


const LocationCreation = () => {
  const { locations, setLocations } = useContext(LocationsContext)
  const navigate = useNavigate();

  const onSubmit = (data) => {
    
    console.log("aqui");
    getLocations(data.latitude,data.longitude)
      .then((d) =>  {
        const locationNew ={
          id: locations.length + 1,
          country: data.country,
          latitude:data.latitude,
          longitude:data.longitude,
          temperature:d.current_weather.temperature,
          windspeed:d.current_weather.windspeed,
          url_photo:data.url_photo,
        }
        setLocations([...locations, locationNew])
        console.log(d);
       })
      .catch((err) => console.log(err));
    console.log("termino");
    
    navigate('/')
  }

  const { register, handleSubmit, formState: { errors } } = useForm()
  console.log(errors);
  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="CIUDAD" {...register("country", {required: true, maxLength: 80})} />
      <input type="text" placeholder="LATITUD" {...register("latitude", {required: true})} />
      <input type="text" placeholder="LONGITUD" {...register("longitude", {required: true})} />
      <input type="text" placeholder="URL FOTO" {...register("url_photo", {required: true})} />
      <input type="submit" />
    </form>
  );
}


export default LocationCreation;

