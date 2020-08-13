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
                        {/* <Navbar bg='dark' variant='whatever' classname='navBar'>
    <Navbar.Brand name='homeL' className='homeL' onClick={this.hideWelcome}>Portfolio</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link name='aboutMe' className='linkColor'><Link to='/' className='linkColor'>About Me</Link></Nav.Link>
      <Nav.Link name='projects' className='linkColor'><Link to='/projects' className='linkColor'>Projects</Link></Nav.Link>
      <Nav.Link name='resume' className='linkColor'><Link to='/resume' className='linkColor'>Resume</Link></Nav.Link>
      <Nav.Link name='contact' className='linkColor'><Link to='/contact' className='linkColor'>Contact</Link></Nav.Link>
    </Nav> */}
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
        <a class='navbar-brand'href="#">Mary Hooker Development</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-3">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <Link to='/aboutMe'class="nav-link waves-effect waves-light">About Me</Link>
            </li>
          <li class="nav-item active">
            <Link class="nav-link waves-effect waves-light" to='/projects'>Projects
              <span class="sr-only">(current)</span>
            </Link>
            </li>
            <li class="nav-item active">
            <Link class="nav-link waves-effect waves-light" to='/resume'>Resume
              <span class="sr-only">(current)</span>
            </Link>
            </li>
            <li class="nav-item active">
            <Link class="nav-link waves-effect waves-light" to='/contact'>Contact
              <span class="sr-only">(current)</span>
            </Link>
            </li>
        
        </ul>
        <ul class="navbar-nav ml-auto nav-flex-icons">
          {/* <li class="nav-item">
            <a class="nav-link waves-effect waves-light">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light">
              <i class="fab fa-facebook"></i>
            </a>
          </li> */}
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="https://github.com/MaryHooker">
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="https://www.linkedin.com/in/mary-hooker-27b63a1b0/">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link waves-effect waves-light">
              <i class="fab fa-google-plus-g"></i>
            </a>
          </li> */}
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-user"></i>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  {/* </Navbar> */}
 
                { /* Routes for Simple Grid and React Cards example */ }
                        <Route path="/aboutMe" exact component={() => <AboutMe/>}/>
                          

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