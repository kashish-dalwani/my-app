import React from "react";
import './container2.css';
import cont2 from '../../src/assets/Container2.png'

function Container2(){
    return(
        <div className="cont2">
            <div className="cont2img">
                <img src={cont2} alt="cont2img" className="img2"></img>
            </div>
            <div className="text1">
                <h4 className="head">Know your Doctor</h4>
            </div>
        </div>
    );
}
export default Container2
