import React, { useState } from 'react';

export default function Contact() {

    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    return (
        <div>
            <h1 className="text-center">Contact Me</h1>
            <form>
                <div class="mb-3">
                    <label for="nameInput" className="form-label">Name</label>
                    <input
                        className="form-control"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="name"
                    required/>
                </div>
                <div class="mb-3">
                    <label for="emailInput" className="form-label">Email</label>
                    <input
                        className="form-control"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                    required/>
                </div>
                <div class="mb-3">
                    <label for="messageInput" className="form-label">Message</label>
                    <input
                        className="form-control"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="message"
                    required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
