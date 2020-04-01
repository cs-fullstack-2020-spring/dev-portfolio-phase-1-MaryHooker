import React,{Component} from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <embed src="./MCHookerResume.pdf" width="100%" height="600px"/>
            </div>
         );
    }
}
 
export default Resume;