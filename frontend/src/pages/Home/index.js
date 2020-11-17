import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import Aside from '../../components/Aside/index'

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
        <div className="interface">
            <Header />
            <main className="main">
                <ul className="characters">
                    {
                        characters.map(character => {
                            return (
                                <li key={character.id} className="character">
                                    <Link to={`/character/${character.id}`}>
                                        <img src={ '../images/' + character.image } alt={ character.name } />
                                        <div className="character-name" >{ character.name }</div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </main>
            <Footer />
            <Aside />
        </div>
    )
}

export default HomePage;