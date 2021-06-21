import React from 'react';
import './Course.css';
import NavBar from '../../Components/NavBar/NavBar'
import {courseCategory} from './Category'
import{ Products} from './Products';


function Course() {


    return (
        <div className="course-conteiner">
        <div className="top-conteiner"><NavBar/></div>
            <Products/>
        </div>
    )
}

export default Course
