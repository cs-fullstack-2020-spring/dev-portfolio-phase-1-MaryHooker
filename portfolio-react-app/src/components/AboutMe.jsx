import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';



class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }



  render() {


    return (
      <div>
                <Animated animationIn="slideInDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>

                    <div className='aboutMeContainer'>


                        <div className='imageMe'>
                            <img src="/ME2.jpeg" alt="me" className='imageSize' class='img-fluid' />
                        </div>


                        <div className='aboutMeText' >
                          <h2 className='textTitle'>About Me</h2>
                            <p>Hi! My name is Mary Hooker and I'm a full stack software developer.  I'm most interested in front-end web development, but I'm open to all positions and push for the best in everything I do. My education started with CodeCrew Code School and I intend to further my education throughout my career.</p>
                            <div className='logo'>
                                <br/>
                                <h2 className='textTitle'>Languages</h2>
                                <img src="/triforce2.png" alt="javascript" className='js'/>
                                <br/>
                                {/* <br/> */}
                                <img src="/React.png" alt="react" className='react'/>
                               

                            {/* <img src="/logo5.png" class='img-fluid' alt="logo" width='20%' /> */}
                        </div>
                        </div>

                       

                    </div>
                </Animated>
      
                    
            </div >
      );
  }
}

export default AboutMe;