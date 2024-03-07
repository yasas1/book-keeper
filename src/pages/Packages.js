import React from 'react';
import "../styles/Packages.css";

function Packages() {
    return (
        <div className="main-container">

            <h1 className="main-header" style={{marginTop:"15px"}}>Find a plan that's right for you</h1>

            <div className="pricing-box-container">

                <div className="pricing-box text-center">
                    <h2>Silver</h2>
                    <p className="price"><sup>$</sup>55<sub>/Week</sub></p>
                    <ul className="features-list">
                        <li><strong>1</strong> bank/credit card account
                            <br/> (In total, Upto 60 transactions/month)
                        </li>
                        <li> Bank/Credit Card Reconciliation <br/><strong>Monthly</strong></li>
                        <li> Match Invoices to Customer Payments</li>
                        <li> Profit & Loss Statement Review <br/><strong>Quarterly</strong></li>
                        <li> Review and Balance Sheet Reconciliation <br/><strong>Quarterly</strong></li>
                        <li> BAS Preparation and Lodgement</li>
                        <li> Annual Review of Financial Statements</li>
                        <li><strong> Weekly Payrun</strong></li>

                    </ul>
                    <div className="service btn-primary">
                        <h4>SELECT</h4>
                    </div>
                </div>

                <div className="pricing-box text-center pricing-box-background">
                    <h2>Gold</h2>
                    <p className="price"><sup>$</sup>95<sub>/Week</sub></p>
                    <ul className="features-list-special">
                        <li><strong>1</strong> bank/credit card account
                            <br/> (In total, Upto 60 transactions/month)
                        </li>
                        <li> Bank/Credit Card Reconciliation <br/><strong>Weekly</strong></li>
                        <li> Match Invoices to Customer Payments</li>
                        <li> Enter Bills
                            <br/><p style={{fontStyle: "Italic"}}>(This includes sending remittance advises, processing
                                of bank file for bulk payments)</p>
                        </li>
                        <li> Month End Journal Entries</li>
                        <li> Profit & Loss Statement Review <br/><strong>Quarterly</strong></li>
                        <li> Review and Balance Sheet Reconciliation <br/><strong>Quarterly</strong></li>
                        <li> BAS Preparation and Lodgement</li>
                        <li> Annual Review of Financial Statements</li>
                        <li><strong> Fortnightly Payrun</strong></li>
                    </ul>

                    <div className="btn-primary-special">
                        <h4>SELECT</h4>
                    </div>
                </div>

                <div className="pricing-box text-center">
                    <h2>Platinum</h2>
                    <p className="price"><sup>$</sup>175<sub>/Week</sub></p>
                    <ul className="features-list">
                        <li><strong>1</strong> bank/credit card account
                            <br/> (In total, Upto 60 transactions/month)
                        </li>
                        <li> Bank/Credit Card Reconciliation <br/><strong>Weekly</strong></li>
                        <li> Match Invoices to Customer Payments</li>
                        <li> Monthly Aged Receivables Report</li>
                        <li> Enter Bills
                            <br/><p style={{fontStyle: "Italic"}}>(This includes sending remittance advises, processing
                                of bank file for bulk payments)</p>
                        </li>
                        <li> Monthly Aged Payables Report</li>
                        <li> Month End Journal Entries</li>
                        <li> Profit & Loss Statement Review <br/><strong>Monthly</strong></li>
                        <li> Review and Balance Sheet Reconciliation <br/><strong>Monthly</strong></li>
                        <li> BAS Preparation and Lodgement</li>
                        <li> Annual Review of Financial Statements</li>
                        <li><strong> Fortnightly Payrun</strong></li>
                    </ul>
                    <div className="btn-primary">
                        <h4>SELECT</h4>
                    </div>
                </div>
            </div>
            <div className="service-container">
                <div className="service">
                    <h2>Payroll Management</h2>
                    <ul className="features-list-special">
                        <li></li>
                        <li>Superannuation Quarterly Reporting</li>
                        <li> Annual Payment Summaries</li>
                        <li> Tax File declaration Completion</li>
                        <li> Employee Leave Calculation and Payment Processing</li>
                        <li> Reconciliation of PAYG Withholding Account</li>
                        <li> payrun Management and STP Reporting</li>
                        <li></li>
                    </ul>
                </div>
            </div>

            <div className="service-container">

                <div className="service-special pricing-box-background">
                    <h4>Weekly Payrun</h4>
                    <ul className="features-list-special">
                        {/*<li></li>*/}
                        <li>1 - 3 Employees : <strong> $35 per employee per payrun </strong></li>
                        <li> 4 - 8 Employees : <strong> $50 per employee per payrun </strong></li>
                        <li> More than 8 Employees : <strong> $65 employee per payrun </strong></li>
                        <li></li>
                    </ul>
                </div>

                <div className="service-special pricing-box-background">
                    <h4>Fortnightly Payrun</h4>
                    <ul className="features-list-special">
                        {/*<li></li>*/}
                        <li>1 - 10 Employees : <strong> $60 per employee per payrun </strong></li>
                        <li> More than 10 Employees : <strong> POA </strong></li>
                        <li></li>
                    </ul>
                </div>

            </div>
            <div className="service-container">
                <div className="service">
                    <h2>One Time Zero Setup Fee</h2>
                    <ul className="features-list">
                        <li></li>
                        <li>For 3 Employees : <strong>$295</strong></li>
                        <li> More than 3 Employees : <strong>$495</strong></li>
                        <li></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Packages;