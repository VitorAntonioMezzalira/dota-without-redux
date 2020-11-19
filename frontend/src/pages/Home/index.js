import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function HomePage() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:5000/api/characters')
      setCharacters(data)
    }
    fetchData();
    return () => {
      //
    }
  }, [])

  return (
    <ul className="characters">
      {
        characters.map(character => {
          return (
            <li key={character.id} className="character">
              <Link to={`/character/${character.id}`}>
                <img src={'../images/' + character.image} alt={character.name} />
                <div className="character-name" >{character.name}</div>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default HomePage;