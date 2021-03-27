import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import "./Home.css";
import {BsArrowRightShort,BsArrowLeftShort} from "react-icons/bs";
import Popular from "../../Components/Courses/Popular";
import News from "../../Components/Courses/News";
import Promotion from "../../Components/Courses/Promotion";
import Category from "../../Components/Courses/Category";

function Home() {

    //React hooks:
    const [active,setActive] = React.useState("PopularCard");

    //Open Popular Course Card:
    
    const openPopular=()=>{
        setActive("PopularCard");
    }
    
    //Open Popular Course Card:
    const openNews=()=>{
        setActive("NewsCard");
    }
    //Open Category Course Card:
    const openCategory=()=>{
        setActive("CategoryCard");
    }
    //Open Promotion Course Card:
    const openPromotion=()=>{
        setActive("PromotionCard");
    }


    return (
        <div className="home-conteiner">
            <div className="top-conteiner"><NavBar/></div>
            <div className="text"><p>Rozwijaj się z FOX School</p></div>
            <div className="horizontal-box-links">
                <a className="li-effect" href="#" onClick={openPopular}>Popularne</a>
                <a className="li" href="#" onClick={openNews}>Nowe kursy</a>
                <a className="li" href="#" onClick={openCategory}>Kategorie</a>
                <a className="li" href="#" onClick={openPromotion}>Promocje</a>
            </div>
            <div className="horizontal-box-courses">
                <a  href="/" className="left-navigation-button"><div className="icon-arrow"><BsArrowLeftShort/></div></a>
                    {active === "PopularCard" && <Popular/> }
                    {active === "NewsCard" && <News/> }
                    {active === "CategoryCard" && <Category/> }
                    {active === "PromotionCard" && <Promotion/> }
                <a href="/" className="right-navigation-button"><div className="icon-arrow"><BsArrowRightShort/></div></a>
            </div>
        </div>
    )
}

export default Home;
