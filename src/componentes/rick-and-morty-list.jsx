import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../servicios/pokeService";

function RickAndMortyList(){
    const [rymdata, setRyMData] = useState([]);
    const apiURL = 'https://rickandmortyapi.com/api/character';

    useEffect ( () => {
        async function fetchData() {
            let response = await getAllPokemon(apiURL);
            console.log(response);
            setRyMData(response.results);
        }
        fetchData();
    }, [] )




    return(
        <div>
            <h1>Rick and Morty List</h1>
            <ul>
            {rymdata.map((rym) => (
          <li key={rym.id}>
            <h2>{rym.name}</h2>
            <p>Status: {rym.status}</p>
            <img src={rym.image} alt={rym.name} />
          </li>
        ))}
            </ul>
        </div>
    )

}



export default RickAndMortyList;