import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import sign from '../assets/logo/signature.png'
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { useAuthGlobally } from "./context/AuthContext";
import toast from "react-hot-toast";

const linkStyle = {color: 'white', textDecoration: "none",};// Remove underline

const Navbar = () => {
  const [auth, setAuth] = useAuthGlobally();

  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu(!showMenu); // Toggle the menu visibility
  }

  const closeMenu = () => {
    setShowMenu(false); // Close the menu
  }

  //logout handler
  const handleLogout = ()=>{
    setAuth({
      ...auth,
      user: null,
      token : '',
    })
    localStorage.removeItem('Token')
    toast.success("Logged Out")
  }

  return (
    <div className={`navbar_bg ${showMenu ? 'mobile-bg' : ''}`}>
      <nav className="navbar container">
       <Link to={'/'}> <img className="logo" src={sign} alt="" /></Link>
       
        {showMenu ? (<a onClick={closeMenu} href="#" className="menu mobile-close"><BiX /></a>) 
        : (<a onClick={menuHandler} href="#" className="menu mobile-menu"><BiMenuAltRight /></a>)}

        <ul className={`navlinks ${showMenu ? 'active' : ''}`}>
          <NavLink to={"/"} style={linkStyle} onClick={closeMenu}>Home</NavLink>
          <NavLink to={"/about"} style={linkStyle} onClick={closeMenu}> About</NavLink>
          <NavLink to={"dashboard/blog"} style={linkStyle} onClick={closeMenu}>Blog</NavLink>
          {
            auth.user ? (
              <>
              {/* <h2>Hi ! {auth.user.name}</h2> */}
              <NavLink onClick={handleLogout} to={"/login"} style={linkStyle}>Logout</NavLink>
              </>
            ) : (<>
              <NavLink to={"/register"} style={linkStyle} onClick={closeMenu}>Register</NavLink>
          <NavLink to={"/login"} style={linkStyle} onClick={closeMenu}>Login</NavLink>
            </>)
          }
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


