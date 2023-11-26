import React from 'react';
import "../styles/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {Link} from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Link to="/contact"> <ContactMailIcon /></Link>
                <FacebookIcon /> <LinkedInIcon />
            </div>
            <p> &copy; Authorised Credit Representative (Number xxxx) of Vow Financial (Australian Credit Licence Number xxx).</p>
            <p> &copy; 2024 domain-name.com.au</p>
        </div>
    );
}

export default Footer;