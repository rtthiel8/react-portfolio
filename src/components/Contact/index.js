import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Please enter a valid email.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function checkInput(e) {
        e.target.value
            ? e.target.removeClass('hide')
            : e.target.addClass('alert')
    }

    return (
        <section>
            <h1>Contact me</h1>
            <div id="stylized">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="hide">
                        <h3>Field is required!</h3>
                    </div>

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" defaultValue={name} onMouseOut={checkInput} onBlur={handleChange} name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" defaultValue={email} onMouseOut={checkInput} name="email" onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label><br />
                        <textarea name="message" defaultValue={message} onMouseOut={checkInput} onBlur={handleChange} rows="5" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm;