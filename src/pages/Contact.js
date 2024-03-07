import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function Contact() {
    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    const sendEmail = (e) => {
        e.preventDefault();

        function displaySubmitMessage(type) {
            if (type === "success") {
                success.style.display = 'block';
            } else {
                danger.style.display = 'block';
            }
            setTimeout(() => {
                danger.style.display = 'none';
                success.style.display = 'none';
            }, 3000);
        }

        emailjs.sendForm('service_b5wf9wp', 'template_rz743cc', form.current, 'GKG8e-mPk3Qco8dxX')
            .then((result) => {
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                displaySubmitMessage("success");
            }, (error) => {
                displaySubmitMessage("danger");
            });
    };

    return (
        <div className="container-column">

            <div className="container-row">
                <div className="header-item">
                    <h1>Contact Us</h1>
                </div>
            </div>


            <div className="container-row">

                <div className="left-item">

                    <h3>Get in touch</h3>

                    <div style={{marginTop: "20px"}} className="material-icons"><EmailIcon/> <strong
                        style={{marginLeft: "10px"}}>info@snapledger.com.au</strong></div>

                    <div style={{marginTop: "20px"}} className="material-icons"><PhoneEnabledIcon/> <strong
                        style={{marginLeft: "10px"}}>(+61) 0452589884 </strong></div>
                    <p style={{marginTop: "20px"}}>
                        To start the conversation about any of our financial services, simply fill the form and send.
                        Snapledger specialist will get back to you with a clear direction within 24 hours.
                    </p>


                </div>

                <div className="right-item">

                    <p >For general enquiries or to make an appointment, please use the form below.</p>

                    <div style={{marginTop: "10px"}}>
                        <form ref={form} id="contact-form" onSubmit={sendEmail}>

                            {/*<label htmlFor="name"> Name </label>*/}
                            <input id="input-name" name="name" placeholder="Name" type="text" required value={name}
                                   onChange={(e) => setName(e.target.value)}/>

                            {/*<label htmlFor="email"> Email </label>*/}
                            <input id="input-email" name="email" placeholder="Email" type="email" required value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>

                            {/*<label htmlFor="phone"> Phone </label>*/}
                            <input id="input-phone" name="phone" placeholder="Phone" type="tel" value={phone}
                                   onChange={(e) => setPhone(e.target.value)}/>

                            {/*<label htmlFor="message"> Message </label>*/}
                            <textarea rows="10" placeholder="Message" name="message" value={message}
                                      onChange={(e) => setMessage(e.target.value)} required>
                            </textarea>

                            <div className="submit-message">
                                <div className="success" id="success">
                                    Your message is successfully sent!
                                </div>
                                <div className="danger" id="danger">
                                    The message can't be sent. Try again later!
                                </div>
                            </div>

                            <button id="button" type="submit" value="send"> Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;