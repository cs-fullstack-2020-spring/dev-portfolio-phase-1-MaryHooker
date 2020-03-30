import React,{Component} from 'react';

class ContactDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>Messages</h2>
                {
                    this.props.contact.map((contact, index) =>{
                        return(
                            <div key={index}>
                                <p>Name: {contact.name}</p>
                                <p>Email: {contact.email}</p>
                                <p>Message: {contact.message}</p>
                            </div>
                        )
                    }

                    )
                }
            </div>
         );
    }
}
 
export default ContactDisplay;