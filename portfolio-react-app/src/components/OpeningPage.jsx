import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Resume from './Resume';
import { Animated } from "react-animated-css";
// import CSSTransitionGroup from 'react-transition-group';

class OpeningPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    hideWelcome = (event) => {
        let tagDisplay = document.querySelector('#display')
        //sanity
        console.log(tagDisplay.innerText)


        if (event.target.name === 'aboutMe') {
            tagDisplay.innerText = '';
        } else if (event.target.name === 'projects') {
            tagDisplay.innerText = '';
        } else if (event.target.name === 'contact') {
            tagDisplay.innerText = '';
        } else if (event.target.name === 'resume') {
            tagDisplay.innerText = '';
        } else if (event.target.name === 'homeL') {
            tagDisplay.innerText = 'Welcome';
        }
    }

    render() {
        return (
            <div className='links'>
                {/* <CSSTransitionGroup transitionName='group'> */}
                <Router>

                    <Link to="/" name='homeL' className='homeL' onClick={this.hideWelcome}>Home</Link>


                    <Link to="/aboutMe" name='aboutMe' className='aboutMeL' onClick={this.hideWelcome}>About Me</Link>


                    <Link to="/projects" name='projects' className='projectsL' onClick={this.hideWelcome}>Projects</Link>


                    <Link to="/contact" name='contact' className='contactL' onClick={this.hideWelcome}>Contact</Link>

                    <Link to="/resume" name='resume' className='resumeL' onClick={this.hideWelcome}>Resume</Link>

                    <Route path="/aboutMe">
                        <AboutMe />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                </Router>
                {/* </CSSTransitionGroup> */}
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <div>
                        {this.tagDisplay}
                        <h1 id='display' className='welcome'>Welcome</h1>
                    </div>
                </Animated>

            </div>
        );
    }
}

export default OpeningPage;