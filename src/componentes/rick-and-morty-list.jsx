import { useEffect, useState } from "react";
import CustomModal from "./modal"; 


async function getAllCharacters(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return { results: [] };}
}

function RickAndMortyList() {
    const [rymdata, setRyMData] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [open, setOpen] = useState(false);
    const apiURL = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllCharacters(apiURL);
                console.log('Data fetched:', data); 
                setRyMData(data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

   
    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedCharacter(null);
    };

    return (
        <div>
            <h1>Rick and Morty List</h1>
            <ul>
                {rymdata.length === 0 ? (
                    <p>Loading characters...</p>
                ) : (
                    rymdata.map((rym) => (
                        <li
                            key={rym.id}
                            onClick={() => handleCharacterClick(rym)}
                            style={{ cursor: 'pointer', marginBottom: '10px' }}
                        >
                            <h2>{rym.name}</h2>
                            <p>Status: {rym.status}</p>
                            <img src={rym.image} alt={rym.name} style={{ width: '100px', height: '100px' }} />
                        </li>
                    ))
                )}
            </ul>

            
            {selectedCharacter && (
                <CustomModal
                    open={open}
                    handleClose={handleCloseModal}
                    character={selectedCharacter}
                />
            )}
        </div>
    );
}

export default RickAndMortyList;