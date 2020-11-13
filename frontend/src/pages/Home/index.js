import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Aside from '../../components/aside/index'

function HomePage() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:5000/api/characters')
            setCharacters(data)
            console.log(data)
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
                                    <a href="../hero_page/index.html">
                                        <img src={ '../images/' + character.image } alt={ character.name } />
                                        <div className="character-name" >{ character.name }</div>
                                    </a>
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