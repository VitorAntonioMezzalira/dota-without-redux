import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Aside from '../../components/Aside';

import './style.css';
import Axios from 'axios';

function HeroPage(props) {

  const id = props.match.params.id;

  const [ character, setCharacter ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(`http://localhost:5000/api/character/${id}`);
      setCharacter(data);
    };
    fetchData();
    return () => {
      //
    }
  }, []);

  // Refresh info of rating bar
  function showRate() {
    const rate = document.querySelector('.input-rate')
    const rateInfo = document.querySelector('.info-input-rate');
    const rateValue = (rate.value / 10).toFixed(1);
    rateInfo.innerHTML = rateValue;
  }

  return (
    <div className="interface">
      <Header />
        <div className="main">
          <div className="hero-page">
            <div className="hero-info">
              <h2>{character.name}</h2>
              <img src={`../images/${character.image}`} alt={character.name} />
              <div className="info">
                <div className="hero-rating">
                  <h3>Rating: {character.rating}</h3>
                  <h4>Number Reviews (54)</h4>
                </div>
                <div className="hero-favorite">
                  &#10084;
                </div>
              </div>
            </div>     
            <div className="hero-rate">
              <div className="rate">
                <h3>Rate</h3>
                <input onInput={showRate} className="input-rate" type="range" min="0" max="50" />
                <div className="info-rate">                    
                  <h4 className="info-input-rate">5.0</h4>
                  <button>Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      <Aside />
    </div>
  )
}

export default HeroPage;
