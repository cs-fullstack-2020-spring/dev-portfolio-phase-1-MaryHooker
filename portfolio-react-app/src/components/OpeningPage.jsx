import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class OpeningPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className='links'>
                <Router>
                    
                        <Link to="/" className='homeL'>Home</Link>
                    
                    
                        <Link to="/aboutMe" className='aboutMeL'>About Me</Link>
                    
                   
                        <Link to="/projects" className='projectsL'>Projects</Link>
                   
                    
                        <Link to="/contact" className='contactL'>Contact</Link>
                    
                    <Route path="/aboutMe">
                        <AboutMe />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/contact">
                        <Contact updateArray={this.updateArray}/>
                    </Route>
                </Router>
                <div>
                    <h1 className='welcome'>Welcome</h1>
                </div>
            </div>
        );
    }
}

export default OpeningPage;