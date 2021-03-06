import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import { Animated } from "react-animated-css";
import { Navbar, Nav, Button } from 'react-bootstrap';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

// import OpeningPage from './OpeningPage';


class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opening: false
    }
  }

  openPortfolio = (event) => {
    event.preventDefault();

    this.setState(
      {
        opening: true
      }
    )
    //sanity
    console.log(this.state)
  }

  render() {
    if (!this.state.opening) {
      return (
        <div class='bg'>
        <Animated animationIn="bounceInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>

        {/* <div className='credit'> */}
        {/* <span>Photo by <a href="https://unsplash.com/@weirick?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jake Weirick</a> on <a href="https://unsplash.com/s/photos/stars?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>            </div> */}
            <div  className='welcome'>
                <img src="/welcome3.png" alt="welcome" class='img-fluid'/>
                {/* <h1 id='display' className='welcome'>Welcome</h1> */}
            </div>
                <br/>
                <br/>
                <div className='portfolioButton'>
                <Button onClick={this.openPortfolio} variant='outline-success' size='lg'>View Portfolio</Button>
                    </div>               

           
        </Animated>

    </div>
      )
    } else if (this.state.opening) {
      return (
        <div class='bg'>
                { /* <Animated animationIn="bounceInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */ }
                <Router>
                    
                    
{ /* Bootstrap Navigation Bar */ }
   
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
    {/* <section id='lab_social_icon_footer'>
        <div class='text-center center-block'>
            <a href="https://github.com/MaryHooker" rel='noopener noreferrer' target='_blank' className='socialIcon1'>
                <i id='social-gh' class='fa fa-github-square fa-3x social::before'>
                </i>
            </a>
            <a href="https://www.linkedin.com/in/mary-hooker-27b63a1b0/" rel='noopener noreferrer' target='_blank' className='socialIcon2'>
                <i id='social-gp' class='fa fa-linkedin-square fa-3x social::before'>
                </i>
            </a>
            <a href="/contact" rel='noopener noreferrer' target='_blank' className='socialIcon3'>
                <i id='social-gp' class='fa fa-envelope-square fa-3x social::before'>
                </i>
            </a>

        </div>

    </section> */}
        <a class='navbar-brand text-warning' >Mary Hooker Development</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-3">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
        <Link to='/aboutMe'class="nav-link waves-effect waves-light">About Me</Link>
            </li>
          <li class="nav-item">
            <Link class="nav-link waves-effect waves-light" to='/projects'>Projects
              <span class="sr-only">(current)</span>
            </Link>
            </li> 
            <li class="nav-item">
            <Link class="nav-link waves-effect waves-light" to='/resume'>Resume
              <span class="sr-only">(current)</span>
            </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link waves-effect waves-light" to='/contact'>Contact
              <span class="sr-only">(current)</span>
            </Link>
            </li>
        </ul>
        {/* <ul class="navbar-nav ml-auto nav-flex-icons">
     
          <li class="nav-item active">
            <a class="nav-link waves-effect waves-light" href="https://github.com/MaryHooker">
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link waves-effect waves-light" href="https://www.linkedin.com/in/mary-hooker-27b63a1b0/">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
 
        </ul> */}
      </div>
    
 
    </nav>
  
  { /* </Navbar> */ }
 
                { /* Routes for Simple Grid and React Cards example */ }
                        <Route path="/aboutMe" exact component={() => <AboutMe/>}/>
                          

                        <Route path="/projects" exact component={() => <Projects/>}/>
                     

                        <Route path="/contact" exact component={() => <Contact/>}/>
                        

                        <Route path="/resume" exact component={() => <Resume/>}/>

                        <Redirect to="/aboutMe"/>

                    </Router>
                { /* <div>
                    {openingPage}
                </div> */ }
                                { /* </Animated> */ }
                                {/* <section id='lab_social_icon_footer'>
        <div class='text-center center-block'>
            <a href="https://github.com/MaryHooker" rel='noopener noreferrer' target='_blank' className='socialIcon1'>
                <i id='social-gh' class='fa fa-github-square fa-3x social::before'>
                </i>
            </a>
            <a href="https://www.linkedin.com/in/mary-hooker-27b63a1b0/" rel='noopener noreferrer' target='_blank' className='socialIcon2'>
                <i id='social-gp' class='fa fa-linkedin-square fa-3x social::before'>
                </i>
            </a>
            <a href="/contact" rel='noopener noreferrer' target='_blank' className='socialIcon3'>
                <i id='social-gp' class='fa fa-envelope-square fa-3x social::before'>
                </i>
            </a>

        </div>

    </section> */}
   

            </div>
        );
    }
  }
}

export default AppContainer;