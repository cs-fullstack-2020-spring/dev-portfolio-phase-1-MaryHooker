import React,{Component} from 'react';
// import {BrowserRouter as link,route} from 'react-router-dom';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='resumePosition'>
                <embed src="./maryresume2020.pdf" width="420px" className='resumeComp'/>
            </div>
         );
    }
}
 
export default Resume;