import React from 'react';
import './Course.css';
import NavBar from '../../Components/NavBar/NavBar'
import {courseCategory} from './Category'
import{ Products} from './Products';


function Course() {

    //Category filtter:
    const[category, setCategory] = React.useState("");

    const openPLC =()=>{

    }

    return (
        <div className="course-conteiner">
        <div className="top-conteiner"><NavBar/></div>
        <div className="category-box">
            <ul className="course-box">
                {courseCategory.map((item,index)=>{
                    return(
                        <il key={index}>
                            <a className={item.className} href={item.url}>{item.title}</a>
                        </il>
                    )
                })}
                <il></il>
            </ul>
            <Products/>
        </div>
        </div>
    )
}

export default Course
