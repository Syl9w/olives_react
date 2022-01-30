import { listenerCount } from "process";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { resourceLimits } from "worker_threads";
import logo1 from '../img/Logo-White-Olives.svg';
import lang from '../img/Olives-Change-Language-Icon.svg';

const Home = (props: { name: string }) => {
    const [interests, setInterests] = useState([
        { id: '-1', name: '' }
    ]);
    const [interest, setInterest] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(interest)
        const response = await fetch('http://localhost:8000/api/addInterest', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({
                name: interest
            })
        });
        const content = await response.json();
    }
    useEffect(() => {
        fetch('http://localhost:8000/api/getInterests', {
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
        }).then((response) => response.json()).then(function (result) {
            setInterests(result)
        });
    }, []);
    if (props.name) {
        

        let lI = interests.map((item) => (
            <div className="interest-item">

                <div className="interest-text">
                    <p>{item.name}</p>
                </div>
                <div className="interest-checkbox">
                    <input type="checkbox" id="Cinematography" name="Cinematography" value="1" />
                </div>
            </div>
        ));
        return (

            <>

                <div className="square">
                    <div className="logo">
                        <img src={'http://localhost:8000/api/getImage'} width="" alt="" />
                    </div>

                    <div>
                        <div className="ovalino-tag"><p>NAME</p></div>
                        <div className="ovalino"><p>{props.name}</p></div>
                    </div>

                    <div className="separator-50"></div>

                    <form action="get">
                        <div className="ovalino-tag"><p>INTERESTS</p></div>
                        <div className="interests">

                            {lI}


                        </div>

                        <div className="separator-50"></div>
                        <div>
                            <button className="ovalino save-button" type="submit">DELETE</button>
                        </div>
                    </form>

                    <div className="separator-25"></div>

                    <form onSubmit={submit}>
                        <div>
                            <input className="input-add" type="text" placeholder="Input interest"  required
                                onChange={e => setInterest(e.target.value)} />

                            <button className="add-button" type="submit">ADD</button>
                        </div>

                    </form>


                </div>
            </>);
    }
    else {
        return (<div className="square">
            <div className="logo">
                <img src={logo1} width="" alt="" />
            </div>
            <div className="separator">
                <h1>OLIVES</h1>
            </div>
            <div className="btn-container">
                <Link to="/register" className="nav-link active"><a className="btn">CREATE ACCOUNT</a></Link>

                <Link to="/login" className="nav-link active"><a className="btn">LOG IN</a></Link>

            </div>
            <div className="change-language">
                <h4>EN</h4>
                <img src={lang} />
            </div>
            <div className="bottom-link">
                <a >olives.pl</a>
            </div>
        </div>);
    }
};

export default Home;