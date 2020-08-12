import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Animated } from "react-animated-css";
import AboutMe from './AboutMe';

class OpeningPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

 



  render() {


    return (
      <div className='links'>
                <Animated animationIn="bounceInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    
           
    
                        {/* <ul className="nav">

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

                        </ul> */}
               
                    <div>
                        {this.tagDisplay}
                        <h1 id='display' className='welcome'>Welcome</h1>
                    </div>
                    <Router>
                    <div>
                    </div>                        
                    <button><Link to='/aboutMe'>View Portfolio</Link></button>
                    <Route path='/aboutMe' exact component={() => <AboutMe/>}/>
                    </Router>
                </Animated>

            </div>
      );
  }
}

export default OpeningPage;