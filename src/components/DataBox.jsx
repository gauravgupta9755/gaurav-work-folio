import React from 'react';
import { Link } from 'react-router-dom';
 
const DataBox=(props)=>{
    const backgroundColor={
        backgroundColor:props.color
    };
    return (<>

       
        <div className="contenar" style={backgroundColor}>
            
            <div className="left_contenar"><img src={props.image} alt="" /></div>
            <div className="right_contenar">
                <h1 className="title">{props.title}</h1>
                <p className="para">{props.dis}</p>
                <Link to={props.path}><button className="btn">{props.btn}</button></Link>
            </div>
        </div>


    </>);
}
export default DataBox;