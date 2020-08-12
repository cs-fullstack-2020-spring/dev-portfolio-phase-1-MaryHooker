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
      <Nav.Link name='aboutMe' onClick={this.hideWelcome} className='linkColor'><Link to='/' className='linkColor'>About Me</Link></Nav.Link>
      <Nav.Link name='projects' onClick={this.hideWelcome} className='linkColor'><Link to='/projects' className='linkColor'>Projects</Link></Nav.Link>
      <Nav.Link name='resume' onClick={this.hideWelcome} className='linkColor'><Link to='/resume' className='linkColor'>Resume</Link></Nav.Link>
      <Nav.Link name='contact' onClick={this.hideWelcome} className='linkColor'><Link to='/contact' className='linkColor'>Contact</Link></Nav.Link>
    </Nav>
  </Navbar>
 
                { /* Routes for Simple Grid and React Cards example */ }
                        <Route path="/" exact component={() => <AboutMe/>}/>
                          

                        <Route path="/projects" exact component={() => <Projects/>}/>
                     

                        <Route path="/contact" exact component={() => <Contact/>}/>
                        

                        <Route path="/resume" exact component={() => <Resume/>}/>


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