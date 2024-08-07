import React from "react";
import img00 from '../../src/assets/Container2.png';
import img01 from '../../src/assets/Section.png';
import './cont2.css';
import { FiArrowRight } from "react-icons/fi";

function Container2(){
    return(
        <div className="maindiv">
            <img src={img00} alt="img00" className="img001"></img>
            <div className="div1">
                <p className="head">Know your Doctor</p>
                <p className="get">GET TO KNOW</p>
                <p className="icon"><FiArrowRight /> </p>
                <div className="drinfo">Dr. Anuja Kishorrao Chanekar, Your Trusted Dental Surgeon in Nagpur</div>
                <div className="extrainfo">Dr. Anuja Kishorrao Chanekar is a highly skilled and experienced dental surgeon dedicated to providing exceptional oral care to patients of all ages. She believes in a patient-centered approach, ensuring every individual receives personalized treatment and a comfortable dental experience.</div>
            </div>
            <div>
                <img src={img01} alt="img01" className="img011"></img>
            </div>

            
            
        </div>
    );
}
export default Container2