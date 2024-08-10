import React from "react";
import './form.css';
import { FaArrowRight } from "react-icons/fa6";
import img21 from '../../src/assets/Vector.png';
import img22 from '../../src/assets/Margin.png';


function Form(){
    return(
        <div className="main102">
        <div className="maindiv101">
            <p className="para101">BOOK AN</p>
            <h3 className="head301">Appointment</h3>
            <div className="formdet">
                <div className="namediv">
                <label className="name">Name</label><br></br>
                <input className="namefield" type="textbox" placeholder="David John"></input>
                </div>
                <div className="phonediv">
                <label className="phone">Phone No.</label><br></br>
                <input className="phonefield" type="tel" placeholder="(123) 456 - 789"></input>
                </div>
                <div className="nm">
                    <label className="num">Medical Record Number</label>
                    <input className="numfield" type="number" placeholder="123456-7890-0987"></input>
                </div>
                <div className="datediv">
                <label className="date">Preferred Date</label><br></br>
                <input className="datefield" type="date" placeholder="dd/mm/yyyy"></input>
                </div>
                <div className="timediv">
                <label className="time">Preferred Time</label><br></br>
                <input className="timefield" type="time" placeholder="-- -- --"></input>
                </div>
                <div className="reasondiv">
                    <label className="reason">Reason for visit</label>
                    <div>
                        <input type="radio" id="routine" value="routine" name="res" />
                        <label for="routine" className="rout">Routine Checkup</label>
                    </div>
                    <div>
                        <input type="radio" id="new" value="new" name="res"/>
                        <label for="new" className="ne">New Patient Visit</label>
                    </div>
                    <div>
                        <input type="radio" id="specific" value="specific" name="res"/>
                        <label for="specific" className="spe">Specific Concern</label>
                    </div>
                </div>
                <div className="deptdiv">
                    <label className="dept">Department</label>
                    <div className="ped">
                        <input type="radio" id="pedia" value="pedia" name="dep" />
                        <label for="pedia" >Pediatric</label>
                    </div>
                    <div className="og">
                        <input type="radio" id="obgy" value="obgy"name="dep"  />
                        <label for="obgy">Obstetrics and Gynecology</label>
                    </div>
                    <div className="card">
                        <input type="radio" id="cardio" value="cardio" name="dep"/>
                        <label for="cardio">Cardiology</label>
                    </div>
                    <div className="neur">
                        <input type="radio" id="neuro" value="neuro" name="dep"/>
                        <label for="neuro" >Neurology</label>
                    </div>
                </div>
                <button className="sub101">Submit<FaArrowRight className="ic"/></button>

            </div>
            </div>
            <div className="imgtwo">
                <img src={img21} alt="img21" className="image21"></img>
                <img src={img22} alt="img22" className="image22"></img>
            </div>
        </div>
    );

}
export default Form