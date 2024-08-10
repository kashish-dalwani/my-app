import React from "react";
import './footer.css';
import foot from '../../src/assets/Footer.png';
import ftrfoot from '../../src/assets/footerfoot.png';
import { MdLocationPin } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


function Footer(){
    return(
        <div className="main809">
            <img src={foot} alt="foot" className="footimg"></img>
            <div className="foottext">
                <p className="parafoot1">acsmiles Dental Care</p>
                <p className="parafoot2"><MdLocationPin />123 Anywhere St., Any City 12345</p>
                <p className="parafoot3"><IoMdCall />123-456-7890</p>
                <p className="parafoot4"><IoMail />hellocallcenter@gmail.com</p>
            </div>
            <div className="footlist">
                <div className="footlist1">
                    <p className="abtus">About us</p>
                    <p className="depa">Departments</p>
                    <p className="doc">Doctors</p>
                    <p className="tt">Timetable</p>
                    <p className="apt">Appointment</p>
                </div>
                <div className="footlist2">
                    <p className="blog">Blog</p>
                    <p className="cont">Contact Us</p>
                    <p className="fq">FAQs</p>
                    <p className="pp">Privacy Policy</p>
                    <p className="tnc">Terms and Conditions</p>
                </div>
            </div>
            <div className="footsubs">
                <p className="subs">Be Our Subscribers</p>
                <p className="text44">To get the latest news about health from our experts</p>
                <input type="email" className="mailsubs" placeholder="example@gmail.com"></input>
                <button className="subsub">Submit<FaArrowRight className="ic2"/></button>
            </div>
            <div className="fft">
            <img src={ftrfoot} alt="footer" className="footerfoot"></img>
            </div>

        </div>
    );
}

export default Footer