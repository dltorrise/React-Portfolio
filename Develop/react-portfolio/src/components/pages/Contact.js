import React from 'react';

export default function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
                <form>
                    <div class="mb-3">
                        <label for="nameInput" class="form-label">Name</label>
                        <input type="name" class="form-control" id="nameInput" aria-describedby="nameHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="messageInput" class="form-label">Message</label>
                        <input type="message" class="form-control" id="messageInput"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </div>
    );
}
