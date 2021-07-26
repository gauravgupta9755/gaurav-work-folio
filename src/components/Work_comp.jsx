import React from 'react';
import { Link } from 'react-router-dom';
const Work_comp=(props)=>{
    const backgroundColor={
        backgroundColor:props.color}
    return(<>
         
         <div className="contenar" style={backgroundColor}>
        
            <div className="left_contenar"><img src={props.image} alt="" /></div>
            <div className="right_contenar">
                <h1 className="title">{props.title}</h1>
                <p className="para">{props.dis}</p>
               <a target="_blank" href={props.path}><button className="btn">{props.btn}</button></a>
            </div>
        </div>
    </>);
}
export default Work_comp;