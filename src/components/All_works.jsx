import React from 'react';
import Work_comp from './Work_comp';
import Data from './data';


const Work=()=>{

    const fun3=(val)=>{
     return (<>
     <Work_comp path={val.path} image={val.image} color={val.color} title={val.title} dis={val.dis} btn="See Detail"></Work_comp>
     </>);
    }
    const fun2=(val)=>{
     return   val.map(fun3);

    }

    return(<>
   
        {Data.work.map(fun2)}
         
    </>);
}
export default Work;