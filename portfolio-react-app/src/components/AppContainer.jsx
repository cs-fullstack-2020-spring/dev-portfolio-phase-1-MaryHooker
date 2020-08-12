import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Animated } from "react-animated-css";
// import OpeningPage from './OpeningPage';
import {Navbar,Nav} from 'react-bootstrap';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';


class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   opening: false
    }
  }

//   //when component mounts render opening page
//   componentDidMount() {
//     this.setState(
//       {
//         opening: true
//       }
//     )
//   }

//   hideWelcome = (event) => {
//     let tagDisplay = document.querySelector('#display')
//     //sanity
//     console.log(tagDisplay.innerText)


//     if (event.target.name === 'aboutMe') {
//       tagDisplay.innerText = '';
//     } else if (event.target.name === 'projects') {
//       tagDisplay.innerText = '';
//     } else if (event.target.name === 'contact') {
//       tagDisplay.innerText = '';
//     } else if (event.target.name === 'resume') {
//       tagDisplay.innerText = '';
//     } else if (event.target.name === 'homeL') {
//       tagDisplay.innerText = 'Welcome';
//     }
//   }
  render() {
    // let openingPage;

    // if (this.state.opening) {
    //   openingPage = <OpeningPage/>
    // }
    return (
      <div>
                {/* <Animated animationIn="bounceInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
                <Router>
{ /* Bootstrap Navigation Bar */ }
                        <Navbar bg='dark' variant='whatever' classname='navBar'>
    <Navbar.Brand name='homeL' className='homeL' onClick={this.hideWelcome}>Portfolio</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/" name='aboutMe' onClick={this.hideWelcome} className='linkColor'>About Me</Nav.Link>
      <Nav.Link href="/projects" name='projects' onClick={this.hideWelcome} className='linkColor'>Projects</Nav.Link>
      <Nav.Link href="/resume" name='resume' onClick={this.hideWelcome} className='linkColor'>Resume</Nav.Link>
      <Nav.Link href="/contact" name='contact' onClick={this.hideWelcome} className='linkColor'>Contact</Nav.Link>
    </Nav>
  </Navbar>
 
                { /* Routes for Simple Grid and React Cards example */ }
                        <Route path="/" exact component={() => <AboutMe/>}/>
                          

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
                {/* <div>
                    {openingPage}
                </div> */}
                                {/* </Animated> */}

            </div>
      );
  }
}

export default AppContainer;