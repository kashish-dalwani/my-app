import React from "react";
import './cards.css';
import logo1 from '../../src/assets/Background1.png';
import logo2 from '../../src/assets/Background2.png';
import logo3 from '../../src/assets/Background3.png';

function Cards(){
    return(
        <div className="cardcont">
            <div className="heading">
                <h2>Our Values</h2>
            </div>
            <div className="cardcontainer">
            <div className="cards" id="card1">
                <div className="card1head">
                    <img src={logo1} alt="logo1" className="logo1"></img>
                    <h4 className="head1">Compassion</h4><br></br><br></br><br></br><br></br>
                </div>
                <div className="text1">
                    <p>We understand that visiting the dentist can be stressful for some. Our friendly team is dedicated to creating a warm, welcoming atmosphere where you feel comfortable and at ease. We listen attentively to your concerns and strive to make every visit a positive experience.
                    </p>
                </div>
               </div>
                <div className="cards" id="card2">
                  <div className="card2head">
                    <img src={logo2} alt="logo2" className="logo2"></img>
                    <h4 className="head2">Excellence</h4>
                </div>
                <div className="text2">
                    <p>Your smile is our top priority. We are committed to providing exceptional dental care using the latest techniques and technology. Our team continually updates their knowledge and skills to deliver the best possible treatment outcomes.
                    </p>
                </div>
                </div>
                <div className="cards" id="card3">
                <div className="card3head">
                    <img src={logo3} alt="logo3" className="logo3"></img>
                    <h4 className="head3">Integrity</h4>
                </div>
                <div className="text3">
                    <p>We believe in building trust through transparent communication and ethical practices. We will always explain your treatment options clearly, answer any questions you may have, and help you make informed decisions about your oral health. Your well-being is our primary concern.

                    </p>
                </div>
            </div>

        </div>
        </div>
    );
}

export default Cards