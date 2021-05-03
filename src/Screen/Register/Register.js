import React from 'react'
import "./Register.css";
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {BsPerson} from 'react-icons/bs'
import {ImCheckboxUnchecked} from 'react-icons/im'
import NavBar from '../../Components/NavBar/NavBar'

function Register() {
    return (
        <div className="main-conteiner-register">
            <div className="top-conteiner"><NavBar/></div>
            <div className="Register-conteiner">
                <h2>Dane uczestnika e-szkoleń:</h2>
                    <form className="input-form-imie">
                        <div className="icon-imie"><BsPerson/></div>
                        <input  className="input-text-imie" type="text" placeholder="Imię" name="userName" />
                    </form>
                    <form className="input-form-nazwisko">
                        <div className="icon-nazwisko"><BsPerson/></div>
                        <input  className="input-text-nazwisko" type="text" placeholder="Nazwisko" name="userSurname" />
                    </form>
                    <form className="input-form-email">
                        <div className="icon-password"><HiOutlineMail/></div>
                        <input className="input-text-email" type="text" placeholder="E-mail" name="userEmail" />
                    </form>
                    <form className="input-form-password">
                        <div className="icon-password"><RiLockPasswordLine/></div>
                        <input  className="input-text-password" type="password" placeholder="Hasło" name="userPassword" />
                    </form>
                    <a className="subscription" href="/"><ImCheckboxUnchecked/> Chcę otrzymywać wiadomości e-mail z ofertami.</a>
                    <button className="Button-Register" >
                    Zarejestruj się
                    </button>
                    <p className="text-register">Rejestracja oznacza akceptację<a href="/">Warunków użytkowania</a><b/> i <a href="/">Polityki</a> w zakresie<a href="/"> Ochrony prywatności</a>. </p>
            </div>
        </div>
    )
}

export default Register
