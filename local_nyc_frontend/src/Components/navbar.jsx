import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {

    let handleClick = () => {
        props.handleLogOut()
    }

    return (
        <div>
            {
                props.token
                ?
                <ul className="nav">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/neighborhoods">Neighborhoods</NavLink>
                    </li>
                    <li onClick={handleClick}>
                        <NavLink to="/">Log Out</NavLink>
                    </li>
                </ul>
                :
                <ul className="nav">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </ul>
            }
            {/* <ul className="nav">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/neighborhoods">Neighborhoods</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Log In</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
            </ul> */}
        </div>
            
    
    )
}

export default Navbar;