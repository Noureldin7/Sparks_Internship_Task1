import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";

import "../styles/nav.css"

function NavBar() {
    return (
        <>
            <div className="navbar">
                <Link className="Home" to={'/'}>
                    <span className="navtext">Home</span>
                </Link>
                <Link className="Customers" to={'/view'}>
                    <span className="navtext">Customers</span>
                </Link>
                <Link className="Transfers" to={'/transfers'}>
                    <span className="navtext">Transfers</span>
                </Link>
            </div>
            <div style={{position:"relative",top:"15%"}}>
                <Outlet/>
            </div>
        </>
    );
}

export default NavBar;
