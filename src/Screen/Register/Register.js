import React from 'react'
import "./Register.css";
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {BsPerson} from 'react-icons/bs'
import {ImCheckboxUnchecked} from 'react-icons/im'
import {IoChevronBackCircleOutline} from 'react-icons/io5'
import {BiRocket} from 'react-icons/bi'

function Register() {
    return (
        <div className="register-conteiner" >
            <a href="/login" className="back-to-login"><IoChevronBackCircleOutline/></a>
            <div className="register-box">
                <p className="title-register">Dane uczestnika e-szkoleń:</p>
                    <form className="input-form">
                        <div className="icon-form"><BsPerson/></div>
                        <input  className="input-text" type="text" placeholder="Imię" name="userName" />
                    </form>
                    <form className="input-form">
                        <div className="icon-form"><BsPerson/></div>
                        <input  className="input-text" type="text" placeholder="Nazwisko" name="userSurname" />
                    </form>
                    <form className="input-form">
                        <div className="icon-form"><BiRocket/></div>
                        <input  className="input-text" type="text" placeholder="Nazwa konta" name="userSurname" />
                    </form>
                    <form className="input-form">
                        <div className="icon-form"><HiOutlineMail/></div>
                        <input className="input-text" type="text" placeholder="E-mail" name="userEmail" />
                    </form>
                    <form className="input-form">
                        <div className="icon-form"><RiLockPasswordLine/></div>
                        <input  className="input-text" type="password" placeholder="Hasło" name="userPassword" />
                    </form>
                    <a className="subscription active" href="/"><ImCheckboxUnchecked/> Chcę otrzymywać wiadomości e-mail z ofertami.</a>
                    <button className="button-register" >Zarejestruj się</button>
                    <p className="political">Rejestracja oznacza akceptację<a href="/"> Warunków użytkowania </a><br/> i <a href="/">Polityki</a> w zakresie<a href="/"> Ochrony prywatności</a>. </p>
            </div>
        </div>
    )
}

export default Register
