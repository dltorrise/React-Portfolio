import React, { useState } from 'react';

export default function Contact() {

    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

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
            <h1 className="text-center text-white mb-3">Contact Me</h1>
            <form>
                <div className="mb-3">
                    <div className="text-center">
                    <label for="nameInput" className="form-label text-white">Name</label>
                    </div>
                    <input
                        className="form-control"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="name"
                    required/>
                </div>
                <div className="mb-3">
                    <div className='text-center'>
                    <label for="emailInput" className="form-label text-white">Email</label>
                    </div>
                    <input
                        className="form-control"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                    required/>
                </div>
                <div className="mb-3">
                    <div className="text-center">
                    <label for="messageInput" className="form-label text-white">Message</label>
                    </div>
                    <input
                        className="form-control"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="message"
                    required/>
                </div>
                <div className="text-center mb-3t text-white">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}
