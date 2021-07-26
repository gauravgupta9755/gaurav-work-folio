import React from 'react';
import Study from './Study';
import Data from './data';

const fun=(value)=>{
    return(<>
        <Study bc={value.bc} ClassName={value.ClassName} marks={value.marks} passingYear={value.passingYear} ></Study>

    </>);
     
 }
const Schooling=()=>{
    return (<>
           
          {Data.about[0].s.map(fun)}
    
    </>);
}
export default Schooling;