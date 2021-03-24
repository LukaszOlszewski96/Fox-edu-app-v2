import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import "./Home.css";
import {BsArrowRightShort,BsArrowLeftShort} from "react-icons/bs";

function Home() {
    return (
        <div className="home-conteiner">
            <div className="top-conteiner"><NavBar/></div>
            <div className="text"><p>Rozwijaj się z FOX School</p></div>
            <div className="horizontal-box-links">
                <a className="li-effect" href="/">Popularne</a>
                <a className="li" href="/">Nowe kursy</a>
                <a className="li" href="/">Kategorie</a>
                <a className="li" href="/">Promocje</a>
            </div>
            <a href="/" className="horizontal-box-courses">
                <div className="left-navigation-button"><div className="icon-arrow"><BsArrowLeftShort/></div></div>
                <div className="box-courses-popular">
                    <div className="course-box-popular-1"></div>
                    <div className="course-box-popular-2"></div>
                    <div className="course-box-popular-3"></div>
                </div>
            <a href="/" className="right-navigation-button"><div className="icon-arrow"><BsArrowRightShort/></div></a>
            </a>
        </div>
    )
}

export default Home;
