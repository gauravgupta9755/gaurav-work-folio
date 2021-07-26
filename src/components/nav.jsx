import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import backimg from './image/backimg.jpg';
import frontimg from './image/frontimg.jpg';

const Nav=()=>{
    return (
        <>
        <div className="cover">
         <div className="logo_contenar">
            <a href={backimg}> <img src={backimg} alt="" /></a>
            <div className="background_logo">
                
            </div>
        </div>
        <div className="logo_name">
                    <div className="logo"><a href={frontimg}><img src={frontimg} alt="" /></a></div>
                    <NavLink to="/">  <div className="name" ><button className="btn">Gaurav</button> </div></NavLink>
                </div>
        </div>
        </>
    );
}
export default Nav;