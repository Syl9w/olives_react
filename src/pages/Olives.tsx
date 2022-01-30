import React, { SyntheticEvent, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logo1 from '../img/Logo-White-Olives.svg';
import lang from '../img/Olives-Change-Language-Icon.svg';

const Olives = () => {
    const [olives, setOlives] = useState({pf:[
        { id: '-1', name: '', email: '' }]}
    );

    useEffect(() => {
        fetch('http://localhost:8000/api/getSuitableFriends', {
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
        }).then((response) => response.json()).then(function (result) {
            setOlives(result)
        });

    }, []);
    console.log(olives);
    let lO = olives.pf.map((item) => (
        <div className="ps-box">
            <div className="ps-avatar">
                <img src={'http://localhost:8000/api/getImage'} alt=""/>
            </div>
            <div className="ps-text">
                <div className="ps-name">
                    <h2>{item.name}</h2>
                </div>
                <div className="ps-interests">
                    <p>{item.email}</p>
                </div>
            </div>
        </div>

    ));
    return (
        <>
            <div className="square">
                <div className="friends-list">
                {lO}
                </div>

            </div>
        </>
    );
};

export default Olives;