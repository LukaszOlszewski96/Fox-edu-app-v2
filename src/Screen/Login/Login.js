import React, { useContext } from 'react';
import "./Login.css";
import {HiOutlineMail} from 'react-icons/hi';
import {RiLockPasswordLine} from 'react-icons/ri';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {SiFacebook} from 'react-icons/si';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import {db, firebaseApp, provider, auth} from '../../Firebase/Firebase';
import { AuthContext } from '../../Firebase/Auth';
import { Redirect } from 'react-router';



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
    
    //Google auth system:
    const signWithGoogle =()=>{

        var provider = new  firebaseApp.auth.GoogleAuthProvider();;
        provider.setCustomParameters({ prompt: 'select_account' });
        firebaseApp.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            //Add person to DataBase: auth Google and getter email
            db.collection('user').doc(user.uid).set({
                email: user.email,
                imie: user.displayName
            }).then(() => {
                alert("Hello friend ")
            })
            .catch((error) => {
                alert(error.message);
            });
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
        };

    //Facebook Auth
    const signInFacebook = () =>{
        auth().signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
        
            // The signed-in user info.
            var user = result.user;
            //Add person to DataBase: auth Facebook and getter email
            db.collection('user').doc(user.uid).set({
                email: user.email,
                imie: user.displayName
            }).then(() => {
                alert("User has been submitted")
            })
            .catch((error) => {
                alert(error.message);
            });
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;
        
            // ...
          })
          .catch((error) => {
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

    //Change on private account dashboard:
    const {currentUser} = useContext(AuthContext)

    if (currentUser){
        return <Redirect to="/dashboard" />
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
                    <a onClick={signInFacebook} href="/" className="facebook-auth" ><SiFacebook/></a>
                    <a onClick={signWithGoogle} href="/" className="gmail-auth"><AiFillGoogleCircle/></a>
                </div>
                <p className="text-register">Nie posiadasz konta? <a href="/register">Zarejestruj się</a></p>
            </div>
            </div>
        </div>
      
    )
}

export default Login
