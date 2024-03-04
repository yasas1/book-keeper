import React, {useState} from 'react';
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => setOpenLinks(!openLinks);


    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks? "open" : "close"}>
                <img src="/book-keep/logo.jpg" alt="company logo"/>
                <div className="hiddenLinks">
                    <Link to="/"> Home</Link>
                    <Link to="/packages"> Packages</Link>
                    <Link to="/about"> About</Link>
                    <Link to="/contact"> Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link className="link" to="/"> Home</Link>
                <Link className="link" to="/packages"> Packages</Link>

                <Link className="link" to="/about"> About</Link>
                <Link className="link" to="/contact"> Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>

            </div>

        </div>
    );
}

export default Navbar;