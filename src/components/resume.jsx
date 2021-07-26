import React from 'react';
import resume from './image/resume.png';
import resumepdf from './image/resumepdf.pdf';
import downloadimg from './image/download.png';


const resumeStyle={
    textAlign:"center",
    display:"inline"
}
const Resume=()=>{
   
    return (<>
     <div style={resumeStyle}>
  <div> <a href={resumepdf} download ><img width="30px" height="30px" src={downloadimg} alt="" /></a></div> 
    
     <div>   <img width="95%" margin="auto" src={resume} alt="" /></div> 
         </div>
    </>);
}
export default Resume;