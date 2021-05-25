import React from 'react'
import "./LeftBar.css";
import {RiDashboardLine} from  "react-icons/ri";

function LeftBar() {
    return (
        <div className="left-bar-conteiner">
            <div className=" "><p className="logo">unien</p></div>
            <div className="links-box">
                <a href="#"><RiDashboardLine/>Dashboard</a>
                <a href="#">Courses</a>
                <a href="#">Library</a>
                <a href="#">Test</a>
                <a href="#">Blog</a>
                <a href="#">Logout</a>
            </div>
        </div>
    )
}

export default LeftBar
