import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import Aside from '../../components/Aside/index'
import ProfileCharacter from '../../components/ProfileCharacter/index';
import Axios from 'axios';

function Profile(props) {

  const UserId = props.match.params.id
  const [ user, setUser ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(`http://localhost:5000/api/user/${UserId}`);
      setUser(data);
    }
    fetchData();
    return () => {
      //
    };
  }, [])

  return (
    <div className="interface">
      
      <Header />

      <div className="main">
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
          <div className="user-favorites-container">
            <h2 className="characters-grid-title">My favorites</h2>
            <div className="user-favorites">

              <ProfileCharacter />
              <ProfileCharacter />
              <ProfileCharacter />
              <ProfileCharacter />
              <ProfileCharacter />

            </div>
            <button>Show more favorites</button>
          </div>
          <div className="user-ratings-container">
            <h2 className="characters-grid-title">My ratings</h2>
              <div className="user-ratings">
                        
                <ProfileCharacter />
                <ProfileCharacter />
                <ProfileCharacter />
                <ProfileCharacter />
                <ProfileCharacter />

            </div>
            <button>Show more ratings</button>
          </div>
        </div>
      </div>

      <Footer />
      <Aside />

    </div>
  )

}

export default Profile;