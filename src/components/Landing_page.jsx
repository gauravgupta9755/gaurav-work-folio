import React from 'react';
import './css/landing.css';
import DataBox from './DataBox';
import Nav from './nav';
import about from './image/about.png';
import Work from './image/Work.jpg';
import box from './image/box.jpg';


const Landing = () => {
    return (<>
    
   <DataBox image={about} title="Success" dis="Moving is the key of success" btn="About Me" color="gray" path='/about'></DataBox>
   <DataBox image={Work} title="Working" path="/work" dis="Always learn to work" btn="My Work"color="rgb(164, 222, 238)"></DataBox>
   <div className="contenar" >
            
            <div className="left_contenar"><img src={box} alt="" /></div>
            <div className="right_contenar">
                <h1 className="title">Social Link</h1>
                
             <a target="_blank" href="https://www.linkedin.com/in/gaurav-gupta-b39b04203/">   <button className="btn">LinkedIn</button></a>
             <a target="_blank"  href="https://github.com/gauravgupta9755">   <button className="btn">Git Hub</button></a>            
              <a target="_blank"  href="https://leetcode.com/Gauravgupta9755/">   <button className="btn">LeetCode</button></a>
              <a target="_blank"  href="https://www.facebook.com/profile.php?id=100054039754544">   <button className="btn">FaceBook</button></a>
              <a target="_blank"  href="https://www.hackerrank.com/sibbugaurav2001">   <button className="btn">Hacker Rank</button></a>
              
            </div>
        </div>
    </>);
}

export default Landing;