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
                    <h1 className='projectTitle'>Projects</h1>
                    <div className='projectsContainer'>

                        <div className='project1'>
                            <Card style={{ width: '413px', height: '404px' }} className='cardBorder' class='fluid'>
                                <Card.Img variant="top" src="./dreamer.png" className='dreamImage' class='img-fluid'/>
                                <Card.Body className='projectBody'>
                                    <Card.Title className='bold'>Dreamer</Card.Title>
                                    <Card.Text className='dreamDescription'>
                                        This full-stack MERN application is for creating, viewing and learning about dreams that supports both company and customer activities.                                      </Card.Text>
                                      <a href="https://dreamers-dreams.herokuapp.com/" target='_blank'><Button type='submit' className='projectLinks'>Check It Out!</Button></a>
                                      <a href="https://github.com/MaryHooker/Passion-Project-2020.git" target='_blank'><Button className='githubLinks'>GitHub</Button></a>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className='project2'>
                        <Card style={{ width: '413px', height: '404px' }} className='cardBorder' class='img-fluid'>
                                <Card.Img variant="top" src="./trex3.png" className='trexImage' class='img-fluid'/>
                                <Card.Body className='projectBody'>
                                    <Card.Title className='bold'>TREX Logistics</Card.Title>
                                    <Card.Text>
                                        This is a full-stack MERN enterprise application for creating, managing, and monitoring shipments moving through our transportation network.                                       </Card.Text>
                                      <a href="https://enigmatic-basin-72083.herokuapp.com/" target='_blank'><Button className='projectLinks'>Check It Out!</Button></a>
                                          <a href="https://github.com/cs-fullstack-2020-spring/trex-1-team-bam.git" target='_blank'><Button className='githubLinks'>GitHub</Button></a>
                                                                          
                                </Card.Body>
                            </Card>
                        </div>

                        <div className='project3'>
                            
                            <Card style={{ width: '413px', height: '404px' }} className='cardBorder' class='img-fluid'>
                                <Card.Img variant="top" src="./reflections2.png" className='journalImage' class='img-fluid'/>
                                <Card.Body className='projectBody'>
                                    <Card.Title className='bold'>Reflections Journal</Card.Title>
                                    <Card.Text>
                                        This full-stack MERN application provides user with the ability to record and save their daily progress/reflections.
                                      </Card.Text>
                                      <a href="https://reflections-journal.herokuapp.com/" target='_blank'><Button type='submit' className='projectLinks'>Check It Out!</Button></a>
                                      <a href="https://github.com/cs-fullstack-2020-spring/reflections-journal-project-3-MaryHooker.git" target='_blank'><Button className='githubLinks'>GitHub</Button></a>
                                </Card.Body>
                            </Card>
                        </div>
                    </div >
                </Animated>
                <br/>
            </div >
        );
    }
}

export default Projects;