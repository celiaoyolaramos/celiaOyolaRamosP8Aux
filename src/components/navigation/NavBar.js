import React, { useContext } from 'react'
import AuthContext from '../store/auth-context';
import "./NavBar.css";
export const NavBar = (props) => {
    const ctx=useContext(AuthContext);
    return <nav className="navbar">
        <h1>FILMS STORE</h1>
        <section className="links">
        <a href="#">HOME</a>
        <a href="#">About</a>
        {ctx.isLoggedIn?(
            <div><b>Email:  </b>{props.email}</div>
        ):(
            <div><b> </b></div>
        )}
        </section>
    </nav>
}