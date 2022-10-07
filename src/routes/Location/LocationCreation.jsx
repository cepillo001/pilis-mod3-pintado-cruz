import "./LocationCreation.css";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LocationsContext } from "../../contexts/LocationsContext";
const LocationCreation = () => {
  const [tags, setTags] = useState([]);
  const { locations, setLocations } = useContext(LocationsContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    
  }

  const { register, handleSubmit, formState: { errors } } = useForm()
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="CIUDAD" {...register("CIUDAD", {required: true, maxLength: 80})} />
      <input type="number" placeholder="LATITUD" {...register("LATITUD", {required: true})} />
      <input type="number" placeholder="LONGITUD" {...register("LONGITUD", {required: true})} />
      <input type="number" placeholder="temperature" {...register("temperature", {required: true})} />
      <input type="number" placeholder="Velocidad del Viento" {...register("Velocidad del Viento", {required: true})} />
      <input type="text" placeholder="URL FOTO" {...register("URL FOTO", {required: true})} />

      <input type="submit" />
    </form>
  );
}


export default LocationCreation;
