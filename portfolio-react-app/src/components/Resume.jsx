import React,{Component} from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <embed src="./maryresume2020.pdf" width="100%" height="600px"/>
            </div>
         );
    }
}
 
export default Resume;