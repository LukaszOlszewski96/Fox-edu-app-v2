import React from 'react';
import "./ContactForm.css";
import {IoPersonCircleOutline, IoTime} from "react-icons/io5";
import {HiOutlineMail} from "react-icons/hi";
import {MdTitle} from "react-icons/md";
import {AiFillCloseSquare} from "react-icons/ai";
import {FcComments} from "react-icons/fc";
import { db } from '../../Firebase/Firebase';



function ContactForm() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [topic, setTopic] = React.useState("");
    const [text, setText] = React.useState("");

    const addNewContact = () => {
        
        if(!name && !email && !topic && !text){
            alert("Wszystkie pola musza być wypełnione :D")
        }
        else{
            const date = Date();
            db.collection('contacts_formulage').doc(date).set({
                data: date,
                name: name,
                email: email,
                topic: topic,
                text: text
            }).then(
                ()=>{
                    alert("Wiadomość kontaktowa została wysłana :D")
                }).catch((error)=>{
                    alert(error.message);
                })
                setName("");
                setEmail("");
                setTopic("");
                setText("");
        }

    }


    return (
        <div className="contact-form-conteiner">
            <a href="/" className="exit-contact"><AiFillCloseSquare/></a>
                    <p className="title-contact-form">Get in touch</p>
                    <p className="description-contact-form">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className="input-box-contact">
                    <form className="name-input-form">
                        <div className="icon"><IoPersonCircleOutline/></div>
                        <input onChange={(e)=>{setName(e.target.value)}} value={name} id="id" className="name-input" type="text" placeholder="Twoje imie..."/>
                    </form>
                    <form className="name-input-form">
                        <div className="icon"><HiOutlineMail/></div>
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}}  className="name-input" type="text" placeholder="Twój e-mail..."/>
                    </form>
                    <form className="topic-input-form">
                        <div className="icon"><MdTitle/></div>
                        <input value={topic} onChange={(e)=>{setTopic(e.target.value)}} className="topic-input" type="text" placeholder="Temat..."/>
                    </form>
                    <form className="textarea-input-form">
                        <textarea value={text} onChange={(e)=>{setText(e.target.value)}} className="text-area-input" type="text" />
                    </form>
                    <button onClick={addNewContact} href="/" type="submit" className="button-submit">Submit</button>
                </div>
                    </div>
    )
}

export default ContactForm;
