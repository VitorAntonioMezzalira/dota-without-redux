import React, { useEffect, useState } from 'react';
import './style.css';
import ProfileCharacter from '../../components/ProfileCharacter/index';
import Axios from 'axios';

function Profile(props) {

  const UserId = props.match.params.id
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(`http://localhost:5000/api/user/${UserId}`);
      console.log(data)
      setUser(data);
    }
    fetchData();
    return () => {
      //
    };
  }, [])

  return (
    <div className="user-container">
      <div className="user-information">
        <div className="user-left-container">
          <img src={`../images/${user.image}`} alt="abaddon" />
        </div>
        <div className="user-right-container">
          <div className="name-and-options">
            <h1>{user.name}</h1>
            <button>edit profile</button>
          </div>
          <div className="user-numbers">
            <h4><span>103</span> ratings</h4>
            <h4><span>11</span> favorites</h4>
          </div>
          <p>{user.bio}</p>
        </div>
      </div>
      <div className="heroes-list user-favorites-container">
        <h2 className="characters-grid-title">My favorites</h2>
        <div className="user-favorites">
          {console.log(user)}
          {
            user.favorites === undefined ? <div>Loading</div> :
              user.favorites.characters.map(character => {
                return (
                  <div className="user-character">
                    <a href={`../hero_page/${character.id}`}>
                      <img src={`../images/${character.image}`} alt={character.name} />
                      <div className="user-character-name" >{character.name}</div>
                      <h4><span>{character.rating}</span>Global Rating</h4>
                      <h4><span>4.6 </span>My Rating</h4>
                    </a>
                  </div>
                )
              })
          }

        </div>
        <button class="regular-button">Show more favorites</button>
      </div>
      <div className="heroes-list  user-ratings-container">
        <h2 className="characters-grid-title">My ratings</h2>
        <div className="user-ratings">

          <ProfileCharacter name="Abaddon" />
          <ProfileCharacter name="Alchemist" />
          <ProfileCharacter name="A" />
          <ProfileCharacter name="Abaddon" />
          <ProfileCharacter name="Abaddon" />

        </div>
        <button class="regular-button">Show more ratings</button>
      </div>
    </div>
  )

}

export default Profile;