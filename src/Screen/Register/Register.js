import React from 'react'
import "./Register.css";
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {BsPerson} from 'react-icons/bs'
import {ImCheckboxUnchecked} from 'react-icons/im'
import {IoChevronBackCircleOutline} from 'react-icons/io5'
import {BiRocket} from 'react-icons/bi'
import {HiMenu} from 'react-icons/hi'
import {db, firebase} from '../../Firebase/Firebase';


function Register() {

    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [accountName, setAccountName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSumbit = (e) =>{
        e.preventDefault();

            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(user){
                db.collection('user').doc(user.user.uid).set({
                    firstName: name,
                    lastName: surname,
                    email: email,
                    password: password
                }).then(() => {
                    alert("User has been submitted")
                })
                .catch((error) => {
                    alert(error.message);
                });
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
              });
    
            setName("")
            setSurname("")
            setPassword("")
            setEmail("")
        };

    return (
        <div className="register-conteiner" >
            <div className="top-conteiner">
                <a href="/login" className="back-to-login"><IoChevronBackCircleOutline/></a>
                <a href="#" className="hamburger active"><HiMenu/></a>
                </div>
            <div className="register-box">
                <p className="title-register">Dane uczestnika e-szkoleń:</p>
                    <form className="input-form">
                        <div className="icon-form"><BsPerson/></div>
                        <input value={name} onChange={(e)=>{setName(e.target.value)}}  className="input-text" type="text" placeholder="Imię" name="userName" />
                    </form>
                    <form className="input-form">
                        <div className="icon-form"><BsPerson/></div>
                        <input value={surname} onChange={(e)=>{setSurname(e.target.value)}}  className="input-text" type="text" placeholder="Nazwisko" name="userSurname" />
                    </form>
                    <form className="input-form">
                        <div className="icon-form"><BiRocket/></div>
                        <input value={accountName} onChange={(e)=>{setAccountName(e.target.value)}}  className="input-text" type="text" placeholder="Nazwa konta" name="userSurname" />
                    </form>
                    <form className="input-form">
                        <div className="icon-form"><HiOutlineMail/></div>
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="input-text" type="text" placeholder="E-mail" name="userEmail" />
                    </form>
                    <form className="input-form">
                        <div className="icon-form"><RiLockPasswordLine/></div>
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="input-text" type="password" placeholder="Hasło" name="userPassword" />
                    </form>
                    <form className="input-form">
                        <div className="icon-form"><RiLockPasswordLine/></div>
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="input-text" type="password" placeholder="Powtórz hasło" name="userPassword" />
                    </form>
                    <a className="subscription active" href="/"><ImCheckboxUnchecked/> Chcę otrzymywać wiadomości e-mail z ofertami.</a>
                    <button onClick={handleSumbit} type="submit" className="button-register" >Zarejestruj się</button>
                    <p className="political">Rejestracja oznacza akceptację<a href="/"> Warunków użytkowania </a><br/> i <a href="/">Polityki</a> w zakresie<a href="/"> Ochrony prywatności</a>. </p>
            </div>
        </div>
    )
}

export default Register
