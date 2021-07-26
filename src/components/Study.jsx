import React from 'react';


const Study=(props)=>{
    const style={
        backgroundColor:props.bc
    }
    return (<>
           
           <div className="about_contenar" style={style}>
           <h1>{props.ClassName}</h1>
           <hr />
           <table>
               <tr>
                   <td>marks &#10148;</td>
                   <td>{props.marks}</td>
               </tr>
               <tr>
                   <td>passing year &#10148;</td>
                   <td>{props.passingYear}</td>
               </tr>
               <tr>
                   <td>extracurricular activities &#10148;</td>
                   <td>Slow cyle champion</td>
               </tr>
           </table>

           </div>
    </>);
}
export default Study;