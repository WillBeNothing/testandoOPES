import React from "react";

import "./styles.css"

import InputLabel from "../../componets/Input Login/Input-login";

import OPESLogo from "../../assets/images/Logo_Ordo_Realitas.png"

export default function Login() {
    return(
        <div className="container" id="login">
            <header className="header">
                <p>Seja Bem-vindo, agente.</p>
            </header>
           <div className="login-area" id="login-area">
            <form>
                <div className="informações">
                    <img src={OPESLogo} alt="Ordo Realitas Logo" />
                </div>
                <div className="input-area">
                    <InputLabel
                        label="Usuário"
                        className="usuário-input"
                        type="text"
                    >
                    </InputLabel>
                    <InputLabel
                        label="Senha"
                        className="password-input"
                        type="password"
                    >
                    </InputLabel>
                </div>
                <div className="acess-area">
                    <input type="button" value="Acessar" className="acess"/>
                </div>
            </form>
           </div>
        </div>
    )
}