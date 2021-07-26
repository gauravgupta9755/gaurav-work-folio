import React from 'react';
import DataBox from './DataBox';
import blackMan from './image/blackMan.png';
import grad from './image/grad.jpg';
import Work from './image/Work.jpg';
import imgresume from './image/imgresume.jpg';



const About=()=>{
    return(<>
         <DataBox image={blackMan} path="/about/schooling" title="Schooling" color="white" dis="Schooling is the base of the life" btn="See More"></DataBox>
         <DataBox image={grad} path="/about/schooling" title="Graduation" color="gray" dis="This time you can do more better" btn="See More"></DataBox>
         <DataBox image={Work} title="Working" path="/work" dis="Always learn to work" btn="My Work"color="rgb(164, 222, 238)"></DataBox>
         <DataBox image={imgresume} title="Resume" path={"/myresume"} dis="We can write all ability in just one page" btn="See my resume"color="rgb(115, 122, 238)"></DataBox>

        
    </>);
}
export default About;