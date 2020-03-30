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
            <div className='contactContainer'>

                <div className='nameInput'>
                    <label htmlFor="name">Name: </label>
                    <br/>
                    <input type="text" id='name' name='name' value={this.state.name} onChange={this.handleInputs} className='inputBox' />
                </div>

                <div className='emailInput'>
                    <label htmlFor="email">Email: </label>
                    <br/>
                    <input type="email" id='email' name='email' value={this.state.email} onChange={this.handleInputs} className='inputBox' />
                </div>

                <div className='messageInput'>
                    <label htmlFor="message">Message: </label>
                    <br/>
                    <textarea name="message" id="message" cols="50" rows="15" value={this.state.message} onChange={this.handleInputs} className='messageBox'/>
                </div>
              
                <div className='buttonPlace'>
                    <button onClick={this.handleSubmission} className='submitButton' >Send Message</button>
                </div>
                <div className='displayInParent'>
                    <ContactDisplay contact={this.state.contact}/>
                </div>

            </div>
        );
    }
}

export default Contact;