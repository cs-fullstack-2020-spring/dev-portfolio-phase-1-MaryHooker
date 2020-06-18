import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Resume from './Resume';
import { Animated } from "react-animated-css";

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
                <Animated animationIn="bounceInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    
                    <Router>
                        {/* Bootstrap Navigation Bar */}
                        <ul className="nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="/" name='homeL' onClick={this.hideWelcome}>
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutMe" name='aboutMe' onClick={this.hideWelcome}>
                                    About Me
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/projects" name='projects' onClick={this.hideWelcome}>
                                    Projects
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/resume" name='resume' onClick={this.hideWelcome}>
                                    Resume
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" name='contact' onClick={this.hideWelcome}>
                                    Contact
                                </Link>
                            </li>

                        </ul>
                        {/* Routes for Simple Grid and React Cards example */}
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