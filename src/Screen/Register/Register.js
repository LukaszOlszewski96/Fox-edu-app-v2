import React from 'react'
import "./Register.css";
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {BsPerson} from 'react-icons/bs'
import {ImCheckboxUnchecked} from 'react-icons/im'
import NavBar from '../../Components/NavBar/NavBar'
import {db, firebaseApp} from '../../Firebase/Firebase';



function Register() {


    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");




    const handleSumbit = (e) =>{
        e.preventDefault();

            firebaseApp.auth().createUserWithEmailAndPassword(email, password)
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
        <div className="main-conteiner-register">
            <div className="top-conteiner"><NavBar/></div>
            <div className="Register-conteiner">
                <p className="text-register-screen">Dane uczestnika e-szkoleń:</p>
                    <form className="input-form-imie">
                        <div className="icon-imie"><BsPerson/></div>
                        <input value={name} onChange={(e)=>{setName(e.target.value)}}  className="input-text-imie" type="text" placeholder="Imię"  />
                    </form>
                    <form className="input-form-nazwisko">
                        <div className="icon-nazwisko"><BsPerson/></div>
                        <input value={surname} onChange={(e)=>{setSurname(e.target.value)}} className="input-text-nazwisko" type="text" placeholder="Nazwisko"  />
                    </form>
                    <form className="input-form-email">
                        <div className="icon-email"><HiOutlineMail/></div>
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="input-text-email" type="text" placeholder="E-mail"  />
                    </form>
                    <form className="input-form-password">
                        <div className="icon-password"><RiLockPasswordLine/></div>
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="input-text-password" type="password" placeholder="Hasło"  />
                    </form>
                    <a className="subscription" href="/"><ImCheckboxUnchecked/> Chcę otrzymywać wiadomości e-mail z ofertami.</a>
                    <button onClick={handleSumbit} type="submit" className="Button-Register" >
                    Zarejestruj się
                    </button>
                    <p className="text-register">Rejestracja oznacza akceptację<a href="/">Warunków użytkowania</a><b/> i <a href="/">Polityki</a> w zakresie<a href="/"> Ochrony prywatności</a>. </p>
            </div>
        </div>
    )
}

export default Register
