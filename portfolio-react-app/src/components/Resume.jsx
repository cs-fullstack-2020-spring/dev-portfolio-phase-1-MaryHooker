import React,{Component} from 'react';
// import {BrowserRouter as router, link,route} from 'react-router-dom';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='resumeDisplay'>
                <embed src="./maryresume2020.pdf" width="100%" height="600px"/>
            </div>
         );
    }
}
 
export default Resume;