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
      <div class='bg'>
                <Animated animationIn="bounceInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
          
                    <div>
                        {this.tagDisplay}
                        <h1 id='display' className='welcome'>Welcome</h1>
                    </div>
                    <Router>
                    <div>
                    </div>                        
                    <button onclick="viewPortfolio"><Link to='/aboutMe'>View Portfolio</Link></button>
                    <Route path='/aboutMe' exact component={() => <AboutMe/>}/>
                    </Router>
                </Animated>

            </div>
      );
  }
}

export default OpeningPage;