import React from 'react';
import "../styles/About.css";

function About() {
    return (
        <div className="main-container">

            <div className="main-header">
                <h1> About Us</h1>
            </div>

            <div className="item-container">

                <div className="detail-container">
                    <h1 className="header">SNAPLEDGER AUSTRALIA</h1>
                    <div className="paragraph">
                        We are a company headed by a registered bas agent and a senior finance professional with a
                        wealth of experience in public practices and a commercial world with a sound business acumen.
                    </div>
                    <div className="paragraph">
                        We are not just number crunchers.
                    </div>
                    <div className="paragraph">
                        We will provide our services while fixing your problems
                        and giving solutions as we need to help to grow your business.
                    </div>
                </div>

                <img className="image-container" src="/book-keep/about-cover.jpg" alt="Jane"/>

            </div>

            <div className="item-container">

                {/*<img className="image-container" src="/book-keep/about_2.jpg" alt="Jane"/>*/}
                <h1 className="question">Are You Looking For A Registered BAS Agent?</h1>

                {/*<img className="image-container-right" src="/book-keep/about_2_1.jpg" alt="Jane"/>*/}

                <div className="detail-container">
                    {/*<h4>Are you looking for a Registered BAS Agent?</h4>*/}
                    <div className="paragraph">
                        Look no further!
                    </div>
                    <div className="paragraph">
                        Here at <strong style={{fontStyle: "oblique"}}> Snapledger Australia </strong>, we have the Registered BAS Agent you need to get
                        your BAS Lodgement done in a timely and accurate manner.
                    </div>
                </div>

            </div>

            <div className="item-container">

                <div>

                    <strong className="paragraph" style={{fontSize:"22px"}}>
                        Why It Is Important To Use A &nbsp;
                        Registered BAS Agent
                        To Lodge
                        Your Business
                        Activity Statement?
                    </strong>

                    <div className="paragraph">
                        <ul style={{listStyleType: "circle"}}>
                            <li>They are the registered agents from the Tax Practitioners Board to become one and
                                maintain the registration after fulfilling various qualification and experience
                                requirements.
                            </li>
                            <li>They get extra time to lodge your BAS</li>
                            <li>Their professional indemnity insurance protects you from any mistakes they could make on
                                your BAS.
                            </li>
                            <li>They get extra time to lodge a BAS. They must meet various requirements from the Tax
                                Practitioners Board to become one, and to maintain their registration.
                            </li>
                            <li>As a registered BAS agent, we can even prepare your Business Activity Statements to feel
                                the
                                status-quo of your business to advise you on Improvements that you can make in order to
                                keep everything on track.
                            </li>
                        </ul>
                    </div>
                </div>

                {/*<img className="image-container" src="/book-keep/about_3.jpg" alt="Jane"/>*/}


            </div>

            <div className="item-container">
                {/*<img className="image-container" src="/book-keep/about_4.jpg" alt="Jane"/>*/}
                <h1 className="question">Are You Worried About Overdue BAS Returns?</h1>

                {/*<img className="image-container-right" src="/book-keep/about_4_1.jpg" alt="Jane"/>*/}
                <div className="detail-container">
                    {/*<h4>Are you looking for a Registered BAS Agent?</h4>*/}
                    <div className="paragraph">
                        Do not Worry!
                    </div>
                    <div className="paragraph">
                        Leave everything to <strong style={{fontStyle: "oblique"}}> Snapledger </strong>, We will take care of your overdue returns while
                        you focus on your business.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;