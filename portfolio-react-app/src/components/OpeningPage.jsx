import React,{Component} from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

class OpeningPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Welcome</h1>
                <AboutMe/>
                <Projects/>
                <Contact/>
            </div>
         );
    }
}
 
export default OpeningPage;