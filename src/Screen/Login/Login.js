import React from 'react';
import "./Login.css";
import {HiOutlineMail} from 'react-icons/hi';
import {RiLockPasswordLine} from 'react-icons/ri';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {SiFacebook} from 'react-icons/si';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import { auth, providerGoogle } from '../../Firebase/Firebase';

function Login() {

    //google auth system:
    const signWithGoogle =()=>{

        providerGoogle.setCustomParameters({prompt:'select_account'});
        auth().signInWithPopup(providerGoogle).then(
            function(result){
                //Gives Google Access Token. Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
            }
        ).catch((error)=>{
            alert(error.message);
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }


    return (
        <div>
            <a href="/" className="exit-login"><AiOutlineCloseSquare/></a>
            <div className="horizontal-login">
            <div className="login-image"><img src="image/login_image.png"/></div>
            <div className="login-conteiner">
                <p className="text-login">Zaloguj się:</p>
                <form className="input-form">
                    <div className="icon-form"><HiOutlineMail/></div>
                    <input className="input-text" type="text" placeholder="E-mail"input/>
                </form>
                <form className="input-form">
                    <div className="icon-form"><RiLockPasswordLine/></div>
                    <input className="input-text" type="password" placeholder="Hasło"input/>
                </form>
                <a className="remaind-password" href="/">Nie pamiętasz hasła?</a>
                <button type="submit" className="button-Login">Zaloguj się</button>
                <div className="auth-box">
                    <a href="/" className="facebook-auth" ><SiFacebook/></a>
                    <a onClick={signWithGoogle} className="gmail-auth"><AiFillGoogleCircle/></a>
                </div>
                <p className="text-register">Nie posiadasz konta? <a href="/register">Zarejestruj się</a></p>
            </div>
            </div>
        </div>
    )
}

export default Login;
