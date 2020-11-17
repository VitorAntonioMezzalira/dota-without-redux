import React from 'react';

function ProfileCharacter() {
  return (

    <div className="user-character">
      <a href="../hero_page/index.html">
        <img src="../images/abaddon.png" alt="Abaddon" />
        <div className="user-character-name" >Abaddon</div>
        <h4><span>4.2 </span>Global Rating</h4>
        <h4><span>4.6 </span>My Rating</h4>
      </a>
    </div>

  )
}

export default ProfileCharacter;