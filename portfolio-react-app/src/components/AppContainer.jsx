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

{ /* Bootstrap Navigation Bar */ }
                        <Navbar bg='transparent' variant='success' classname='navBar'>
    <Navbar.Brand name='homeL' className='homeL' onClick={this.hideWelcome}>Mary Hooker Development</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/aboutMe" name='aboutMe' bg='light' variant='dark' onClick={this.hideWelcome} >About Me</Nav.Link>
      <Nav.Link href="/projects" name='projects' onClick={this.hideWelcome} className='linkColor'>Projects</Nav.Link>
      <Nav.Link href="/resume" name='resume' onClick={this.hideWelcome} className='linkColor'>Resume</Nav.Link>
      <Nav.Link href="/contact" name='contact' onClick={this.hideWelcome} className='linkColor'>Contact</Nav.Link>
    </Nav>
  </Navbar>
  <Router>
                { /* Routes for Simple Grid and React Cards example */ }
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
                {/* <div>
                    {openingPage}
                </div> */}
            </div>
      );
  }
}

export default AppContainer;