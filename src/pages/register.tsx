import React, { SyntheticEvent, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logo1 from '../img/Logo-White-Olives.svg';
import lang from '../img/Olives-Change-Language-Icon.svg';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch('http://localhost:8000/api/register', {
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        setRedirect(true);
    }
    if(redirect){
        return <Navigate replace to={"/login"}/>
    }
    return (
        <><div className="square">
            <div className="logo">
                <img src={logo1} width="" alt=""/>
                </div>
            <div className="separator">
                <h1>REGISTRATION</h1>
            </div>

            <div className="login-input">
                <form onSubmit={submit}>
                    <div className="input">
                        <input type="text" placeholder="NAME" className="form-control" id="floatingInput" required
                        onChange={e => setName(e.target.value)}/>
                       </div>
                    <div className="input">
                        <input type="email" placeholder="EMAIL"  className="form-control" id="floatingInput" required
                        onChange={e => setEmail(e.target.value)}/>
                        </div>
                    <div className="input">
                        <input type="password" placeholder="PASSWORD" className="form-control" id="floatingPassword" required
                        onChange={e => setPassword(e.target.value)}/>
                        </div>
                    <div className="btn-container">
                        <button type="submit" className="btn-confirm">CONFIRM</button>
                    </div>
                </form>
            </div>
            <div className="change-language">
                <h4>EN</h4>
                <img src={lang}/>
                </div>
            <div className="bottom-link">
                <Link to="/" className="nav-link active"><a >back</a></Link>
                
             
            </div>
        </div></>
    );
};

export default Register;