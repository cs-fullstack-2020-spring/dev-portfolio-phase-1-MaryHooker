import React, { Component } from 'react';
import ContactDisplay from './ContactDisplay';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            contact: [],
        }
    }

    handleInputs = (event) => {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value })
        } else if (event.target.name === 'email') {
            this.setState({ email: event.target.value })
        } else if (event.target.name === 'message') {
            this.setState({ message: event.target.value })
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();

        this.state.contact.push(
            {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
            }
        )

        //globally update state
        this.setState({ contact: this.state.contact })

        //reset form
        this.setState(
            {
                name: '',
                email: '',
                message: '',
            }
        )
    }

    render() {
        return (
            <div>
                <h2>Contact Me</h2>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' name='name' value={this.state.name} onChange={this.handleInputs} />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id='email' name='email' value={this.state.email} onChange={this.handleInputs} />
                </div>
                <br />
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" id="message" cols="30" rows="10" value={this.state.message} onChange={this.handleInputs} />
                </div>
                <br />
                <div>
                    <button onClick={this.handleSubmission}>Send Message</button>
                </div>
                <div>
                    <ContactDisplay contact={this.state.contact}/>
                </div>

            </div>
        );
    }
}

export default Contact;