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

    hideWelcome = (event) =>{
        let tagDisplay= document.querySelector('#display')
        //sanity
        console.log(tagDisplay.innerText)

    
          if(event.target.name==='aboutMe'){
            tagDisplay.innerText='';
        } else if(event.target.name==='projects'){
            tagDisplay.innerText='';
        } else if(event.target.name==='contact'){
            tagDisplay.innerText='';
        } else if(event.target.name==='homeL'){
            tagDisplay.innerText='Welcome';
        }
    }

    render() {
        return (
            <div className='links'>
                <Router>
                    
                        <Link to="/" name='homeL' className='homeL' onClick={this.hideWelcome}>Home</Link>
                    
                    
                        <Link to="/aboutMe" name='aboutMe' className='aboutMeL' onClick={this.hideWelcome}>About Me</Link>
                    
                   
                        <Link to="/projects" name='projects' className='projectsL' onClick={this.hideWelcome}>Projects</Link>
                   
                    
                        <Link to="/contact" name='contact' className='contactL' onClick={this.hideWelcome}>Contact</Link>
                    
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
                    {this.tagDisplay}
                    <h1 id='display' className='welcome'>Welcome</h1>
                </div>
            </div>
        );
    }
}

export default OpeningPage;