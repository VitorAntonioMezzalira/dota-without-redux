import React from 'react';
import './style.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Aside from '../../components/aside/index'

function HomePage() {
    return (
            <div className="interface">
                <Header />
                <main className="main">
                    <div className="characters">

                        <div className="character">
                            <a href="../hero_page/index.html">
                                <img src="../images/abaddon.png" alt="Abaddon" />
                                <div className="character-name" >Abaddon</div>
                            </a>
                        </div>
        
                    </div>
                </main>
                <Footer />
                <Aside />
            </div>
    )
}

export default HomePage;