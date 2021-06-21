import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './About.css'

function About() {
    return (
        <div className="about-conteiner">
             <div className="top-conteiner"><NavBar/></div>
             <div className="about-box">
                <p className="tittle-about">Jesteśmy portalem specjalizującym się w szkoleniach dla<br/> Automatyków, Elektryków, Mechatroników</p>
                 <div className="abut-horizontal-box">
                    <p className="text-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 </div>
             </div>
        </div>
    )
}

export default About
