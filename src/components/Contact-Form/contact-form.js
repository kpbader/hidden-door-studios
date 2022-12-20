import React, { useState, useRef } from "react";
import './contact-form.css';

function ContactForm() {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <form id="contact-form">
            <h2>Request a Booking</h2>
            <div id="form-slot-1">
                <label htmlFor="name">Name</label>
                <input type="text" defaultValue={name} name="name" />
            </div>
            <div id="form-slot-2">
                <label htmlFor="email">Email</label>
                <input type="email" defaultValue={email} name="email" />
            </div>
            <div id="time-and-date">
                <label for="appt">Choose your desired date(s) and time</label>
                <input className="user-input" type="date" name="date" placeholder='Select a date' required />
                <input type="time" id="appt" name="appt"
                    min="09:00" max="23:59" required />
            </div>
            <div id="form-slot-3">
                <label htmlFor="message">Message</label>
                <textarea name="message" defaultValue={message} rows="10" cols="45" />
            </div>
            <button type="submit" className="contact-submit-btn">Submit</button>
        </form>
    )
}

export default ContactForm;