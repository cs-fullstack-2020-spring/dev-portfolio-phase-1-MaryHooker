import React, { Component } from 'react';
// import Resume from './Resume';
// import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
// import OpeningPage from './OpeningPage';
import { Animated } from "react-animated-css";


class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {


        return (
            <div className='aboutMeContainer'>

                <Animated animationIn="slideInDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className='imageMe'>
                        <img src="/me3.gif" alt="me" className='imageSize' />
                    </div>
                </Animated>

                <div className='aboutMeText'>
                    <p>Hi! My name is Mary Hooker and I'm a full stack software developer.  I'm most interested in front-end web development but I'm open to all positions and push for the best in everything I do. My education started with CodeCrew Code School and I intend to further my education throughout my career.</p>
                </div>

                <div className='logo'>
                    <img src="/codeCrewLogo3.png" alt="logo" />
                </div>

                {/* <Router className='resumeP'>
                    <Link to='/Resume.jsx' className='resumeLink'>Resume</Link>
                    <Route path='/Resume.jsx'>
                        <Resume />
                    </Route>
                </Router>
 */}



            </div >
        );
    }
}

export default AboutMe;