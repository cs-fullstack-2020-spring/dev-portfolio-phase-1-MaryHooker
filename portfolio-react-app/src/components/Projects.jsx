import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Animated  animationIn='fadeInRight'  animationInDuration={1000} animationOutDuration={1000} isVisible={true}>

                    <div className='projectsContainer'>

                        <div className='html'>
                            <img src="/html5.png" alt="html" className='htmlLogo' />
                        </div>
                        <div className='css'>
                            <img src="/css.png" alt="css" className='cssLogo' />
                        </div>
                        <div className='js'>
                            <img src="/js.png" alt="js" className='jsLogo' />
                        </div>
                        <div className='react'>
                            <img src="/react2.png" alt="react" className='reactLogo' />
                        </div>

                        <div className='project1'>
                            <Card style={{ width: '429px', height: '390px' }} className='cardBorder'>
                                <Card.Img variant="top" src="./dreamer.png" className='dreamImage' />
                                <Card.Body className='projectBody'>
                                    <Card.Title className='bold'>Dreamer</Card.Title>
                                    <Card.Text className='dreamDescription'>
                                        This full-stack MERN application is for creating, viewing and learning about dreams that supports both company and customer activities.                                      </Card.Text>
                                      <form action="https://github.com/MaryHooker/Passion-Project-2020.git" target='_blank'>
                                      <Button type='submit' className='projectLinks'>Check It Out!</Button>
                                      </form>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className='project2'>
                            <Card style={{ width: '429px', height: '390px' }} className='cardBorder'>
                                <Card.Img variant="top" src="./Journal.png" className='journalImage' />
                                <Card.Body className='projectBody'>
                                    <Card.Title className='bold'>Reflections Journal</Card.Title>
                                    <Card.Text>
                                        This full-stack MERN application provides user with the ability to record and save their daily progress/reflections.
                                      </Card.Text>
                                      <form action="https://reflections-journal.herokuapp.com/" target='_blank'>
                                      <Button type='submit' className='projectLinks'>Check It Out!</Button>
                                      </form>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className='project3'>
                            <Card style={{ width: '429px', height: '394px' }} className='cardBorder'>
                                <Card.Img variant="top" src="./Trex.png" className='trexImage' />
                                <Card.Body className='projectBody'>
                                    <Card.Title className='bold'>TREX Logistics</Card.Title>
                                    <Card.Text>
                                        This is a full-stack MERN enterprise application for creating, managing, and monitoring shipments moving through our transportation network.                                       </Card.Text>
                                      <form action="https://enigmatic-basin-72083.herokuapp.com/" target='_blank'>
                                      <Button type='submit' className='projectLinks'>Check It Out!</Button>
                                      </form>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </div >
                </Animated>
            </div >
        );
    }
}

export default Projects;