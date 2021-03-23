import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import "./Home.css";

function Home() {
    return (
        <div className="home-conteiner">
            <div className="top-conteiner"><NavBar/></div>
            <div className="text"><p>Ucz się nowych umiejętności z FOXs</p></div>
            

        </div>
    )
}

export default Home;
