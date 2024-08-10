import React from "react";
import './cont3.css';
import cont3icon from '../../src/assets/cont3icon.png';
import { TfiQuoteLeft } from "react-icons/tfi";
import { TfiQuoteRight } from "react-icons/tfi";


function Container3(){
    return(
        <div>
            <p className="head">Qualifications and Experience</p>
            <div className="card1">
                <div className="icon1"><img src={cont3icon} alt="cont3icon" className="icon"></img></div>
                <p className="head1">Dental Surgeon</p>
                <p className="para1">Dr. Chanekar holds a Bachelor of Dental Surgery (BDS) degree and is a registered dental practitioner (Reg. No. A-50493).</p>
            </div>
            <div className="card2">
                <div className="icon2"><img src={cont3icon} alt="cont3icon" className="icon"></img></div>
                <p className="head2">Years of Experience</p>
                <p className="para2">She has dedicated years to honing her skills and expertise in various aspects of dentistry.</p>
            </div>
            <div className="card3">
                <div className="icon3"><img src={cont3icon} alt="cont3icon" className="icon"></img></div>
                <p className="head3">Continued Education</p>
                <p className="para3">Dr. Chanekar stays up-to-date with the latest advancements in dental technology and techniques to offer her patients the best possible care.</p>
            </div>
            <div className="cont3_1">
                <h4 className="head4">Commitment to</h4>
                <h6 className="head5">PATIENT CARE</h6>
                <div className="paraclass">
                    
                    <p className="para4"><TfiQuoteLeft></TfiQuoteLeft>&nbsp;&nbsp;Dr. Chanekar is known for her compassionate and gentle approach, ensuring patients feel at ease during their dental visits. She takes the time to listen to their concerns, explain treatment options, and create personalized treatment plans. Her goal is to help every patient achieve optimal oral health and a confident smile.&nbsp;&nbsp;<TfiQuoteRight/></p>

                </div>
            </div>
        </div>
    );
}

export default Container3