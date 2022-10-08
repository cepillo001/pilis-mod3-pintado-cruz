import { useContext, useEffect, useState } from "react"
import { FiltersContext } from "../../contexts/FiltersContext"
import './SearchLocation.css'

const SearchLocation = ({location}) => {
    const [ locations, setLocations ] = useState([])
    const [ search, setSearch ] = useState("") //valores que va a tener el input


    //funcion de busqueda
    const searcher = (e) => {
        setSearch(e.target.value) //captura lo que tipeamos en "search"
        console.log(e.target.value) //muestra lo que tipeamos
    }

    //metodo de filtrado
    const results = []
    if(!search)
    {   //si el usuario no ingresa nada en la busqueda, muestra todo
        results = locations
    }else{
        results = locations.filter( (data) => data.country.toLowerCase().includes(search.toLocaleLowerCase()))
    }



    //
    return (
        <div>
            <input value={search} onChange={searcher} type='text' placeholder='Buscar' className='form-control' />
        </div>
    )


}

export default SearchLocation