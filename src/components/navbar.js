import React from 'react';
import '../css/navbar.css';
import {Link } from 'react-router-dom';
import Headerimg from '../images/header_cropped_2.jpg'
export default function Navbar() {
    return (
        <>
        <img src={Headerimg} id="headerimg"/>
        <div className="Navbar">
            <div className="nav">
                <input type="checkbox" id="nav-check"/>
                    <div className="nav-header">
                        <div className="nav-title">
                        <Link to="/"> ECE LAB PORTAL </Link>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav-links">
                        
                        <Link to="/p1"><p className='menuItems'>About</p></Link>
                        <Link to="/p2"><p className='menuItems'>News</p></Link>
                        <Link to="/p3"><p  className='menuItems'>Team</p></Link>
                        <Link to="/p4"><p className='menuItems'>Labs</p></Link>
                        <Link to="/p5"><p className='menuItems'>Facilities</p></Link>
                    </div>
            </div>



        </div>
        </>




    );
}