import React from 'react';
import "./Login.css";
import {HiOutlineMail} from 'react-icons/hi';
import {RiLockPasswordLine} from 'react-icons/ri';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {SiFacebook} from 'react-icons/si';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import {firebaseApp} from '../../Firebase/Firebase';



function Login() {
    
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

     //Email/pass login
     const loginEmailAndPass = () =>{
        
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Weclome");
        })
        .catch((error) => {
            alert(error.message);
        });

        setPassword("");
        setEmail("");
    };
    
    return (
        <div className="login-conteiner-screen">
            <a href="/" className="exit-login"><AiOutlineCloseSquare/></a>
            <div className="horizontal-login">
            <div className="login-image"><img src="image/login_image.png"/></div>
            <div className="login-conteiner">
                <p className="text-login">Zaloguj się:</p>
                <form className="input-form">
                    <div className="icon-form"><HiOutlineMail/></div>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="input-text" type="text" placeholder="E-mail"/>
                </form>
                <form className="input-form">
                    <div className="icon-form"><RiLockPasswordLine/></div>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="input-text" type="password" placeholder="Hasło"/>
                </form>
                <a className="remaind-password" href="/">Nie pamiętasz hasła?</a>
                <button onClick={loginEmailAndPass} type="submit" className="button-Login">Zaloguj się</button>
                <div className="auth-box">
                    <a href="/" className="facebook-auth" ><SiFacebook/></a>
                    <a href="/" className="gmail-auth"><AiFillGoogleCircle/></a>
                </div>
                <p className="text-register">Nie posiadasz konta? <a href="/register">Zarejestruj się</a></p>
            </div>
            </div>
        </div>
      
    )
}

export default Login
