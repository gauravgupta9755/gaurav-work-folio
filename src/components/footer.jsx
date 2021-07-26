import React from 'react';
import './css/footer.css';
import twiter_icon from './image/twiter_icon.png';
import linkedin from './image/linkdin_icon.png';
import facebook from './image/facebook_icon.png';

const Footer=()=>{
return(<>
   <footer>
        <div className="left_footer footer_content">&#169; 2021,jabalpur. All Rights Reserved. Terms of Use |
            Privacy Policy</div>
        <div className="middle_footer footer_content">
            <img src={facebook} alt=""></img>
            <img src={linkedin} alt=""></img>
            <img src={twiter_icon} alt=""></img>
        </div>
        <div className="right_footer footer_content">
            <p>Designed with Love: </p>
            <img src="" alt="img"></img>
        </div>
    </footer>

</>);

}

export default Footer;