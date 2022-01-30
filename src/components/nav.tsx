import React from "react";
import { Link } from "react-router-dom";


const Navigation = (props: {name: string, setName: (name:string) => void}) => {
    const logout = async () =>{
        await fetch('http://localhost:8000/api/logout', {
            method:"POST",
            headers: {'Content-Type':'application/json'},
            credentials: "include"
        });
    props.setName('');
    }

    let menu;
    if(props.name===undefined){
    }
    else{
        menu = (
            <div className="square">
                <div className="navigation">
                    <Link to="/" className="navbar-brand"><a href="profile.html">PROFILE</a></Link>
                    <Link to="/olives" className="navbar-brand"> <a href="frindslist.html">OLIVES</a></Link>
                    <Link to="/" className="navbar-brand" onClick={logout}><a href="index.html">LOG OUT</a></Link>
                </div>
            </div>
        )
    }

    console.log("name: "+ props.name);

    return (
        
                  <>  {menu}</>
                
    );
};

export default Navigation;