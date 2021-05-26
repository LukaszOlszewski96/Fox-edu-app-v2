import React from 'react';
import "./ContactForm.css";
import {IoPersonCircleOutline, IoTime} from "react-icons/io5";
import {HiOutlineMail} from "react-icons/hi";
import {MdTitle} from "react-icons/md";
import {AiFillCloseSquare} from "react-icons/ai";



function ContactForm() {

    return (
        <div className="contact-form-conteiner">
            <a href="/" className="exit-contact"><AiFillCloseSquare/></a>
                    <p className="title-contact-form">Get in touch</p>
                    <p className="description-contact-form">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className="input-box-contact">
                    <form className="name-input-form">
                        <div className="icon"><IoPersonCircleOutline/></div>
                        <input id="id" className="name-input" type="text" placeholder="Your name..."/>
                    </form>
                    <form className="name-input-form">
                        <div className="icon"><HiOutlineMail/></div>
                        <input  className="name-input" type="text" placeholder="Your email..."/>
                    </form>
                    <form className="topic-input-form">
                        <div className="icon"><MdTitle/></div>
                        <input className="topic-input" type="text" placeholder="Topic..."/>
                    </form>
                    <form className="textarea-input-form">
                        <textarea className="text-area-input" type="text" />
                    </form>
                    <button href="/" type="submit" className="button-submit">Submit</button>
                </div>
                    </div>
    )
}

export default ContactForm;
