import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class OpeningPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='links'>
                <Router>
                    <div className='homeLink'>
                        <Link to="/" className='homeL'>Home</Link>
                    </div>
                    <div>
                        <h1 className='welcome'>Welcome</h1>
                    </div>
                    <div className='aboutMeLink'>
                        <Link to="/aboutMe" className='aboutMeL'>About Me</Link>
                    </div>
                    <div className='projectsLink'>
                        <Link to="/projects" className='projectsL'>Projects</Link>
                    </div>
                    <div className='contactLink'>
                        <Link to="/contact" className='contactL'>Contact</Link>
                    </div>
                    <Route path="/aboutMe">
                        <AboutMe />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Router>

            </div>
        );
    }
}

export default OpeningPage;