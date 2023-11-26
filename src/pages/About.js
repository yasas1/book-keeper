import React from 'react';
import "../styles/About.css";

function About() {
    return (
        <div className="about">
            <div className="aboutTop"
                 style={{backgroundImage: `url(/book-keep/about-cover.jpg)`}}>
            </div>
            <div className="aboutBottom">
                <h1> About Us</h1>
                <p>
                    Our Home Loan Specialists are interesting characters, if they’re not digging through information about the latest loan offers, they’re talking to people just like you - people looking to finance their first home, next home or investment.

                    Our specialists assist with:

                    First Home Buyer Finance
                    Next Home Buyer Finance
                    Keystart Loans
                    Car & Boat Loans
                    Investment Finance
                    Refinancing
                    Superannuation Management
                    Wealth Creation
                    Budgeting & Debt Management
                    Property Appraisal
                    Accessing grants and concessions

                    Let’s talk. To start the conversation, just complete the free Finance Health Check so we can begin finding the best financial product for your lifestyle.
                </p>
            </div>
        </div>
    );
}

export default About;