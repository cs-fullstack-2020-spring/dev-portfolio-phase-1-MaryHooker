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
            <div>
                <Animated animationIn="slideInDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className='aboutMeContainer'>


                        <div className='imageMe'>
                            <img src="/me3.gif" alt="me" className='imageSize' />
                        </div>


                        <div className='aboutMeText'>
                            <p>Hi! My name is Mary Hooker and I'm a full stack software developer.  I'm most interested in front-end web development but I'm open to all positions and push for the best in everything I do. My education started with CodeCrew Code School and I intend to further my education throughout my career.</p>
                        </div>

                        <div className='logo'>
                            <img src="/codeCrewLogo3.png" alt="logo" />
                        </div>

                    </div>
                </Animated>
            </div >
        );
    }
}

export default AboutMe;