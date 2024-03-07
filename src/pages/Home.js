import React from 'react';
import "../styles/Home.css";

function Home() {
    return (
        <div className="main-container ">

            {/*<div className="main-header">*/}
            {/*    <h1> SNAPLEDGER AUSTRALIA</h1>*/}
            {/*</div>*/}

            <div className="img-box">
                <img  src="/book-keep/snapledger.gif" alt="Snapledger"/>
            </div>

            <div className="item-container">

                <div className="detail-container">
                    <h1 className="header1">WE GROW WITH YOU!</h1>
                    <div className="paragraph">
                        # 01 Virtual bookkeepers and BAS Agents in australia for small businesses and professionals.
                    </div>
                    <div className="paragraph">
                        We cater our services to anywhere in australia due to our virtual presence at an affordable
                        price
                    </div>
                </div>

                {/*<img className="image-container" src="/book-keep/snap.png" alt="Snapledger"/>*/}

            </div>

            <div className="item-container">

                <img className="image-container" src="/book-keep/about-cover.jpg" alt="Snapledger"/>

                <div className="detail-container">
                    <h1 className="header1">Fixed Fee Bookkeeping Services</h1>
                    <div className="paragraph">
                        Since the majority of our clients are small businesses, managing cashflow in an effective and
                        efficient way is paramount to the success of any small business.
                        Therefore, we provide our services at a fixed fee with numerous packages for you to choose as
                        per your requirements
                    </div>
                    <div className="paragraph">
                        Hence, you will see no more surprise bills from your bookkeeper!
                    </div>
                </div>

            </div>

            <div className="service-main-container">

                <div className="paragraph" style={{fontSize: "22px"}}>
                    At SNAPLEDGER, our mission is to provide timely and affordable services to support your business with your finance books
                    while you focus on your core segments of your business
                </div>

                <div className="service-container">

                    <div className="service">
                        <h3>BOOKKEEPING SERVICES</h3>
                    </div>

                    <div className="service">
                        <h3>BAS LODGEMENT</h3>
                    </div>

                    <div className="service">
                        <h3>SINGLE TOUCH PAYROLL</h3>
                    </div>

                </div>



            </div>

        </div>
    );
}

export default Home;