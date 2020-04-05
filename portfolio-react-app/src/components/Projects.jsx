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
                            <Card style={{ width: '432px', height: '390px' }} className='cardBorder'>
                                <Card.Img variant="top" src="./dream2.png" className='dreamImage' />
                                <Card.Body className='projectBody'>
                                    <Card.Title className='bold'>Dream Journal App</Card.Title>
                                    <Card.Text className='dreamDescription'>
                                        This react application gives the user a chance to record everything they would need to remember about their dreams using a form
                                      </Card.Text>
                                      <form action="https://github.com/cs-fullstack-2020-spring/200317-react-forms-events-practice-MaryHooker" target='_blank'>
                                      <Button type='submit' className='projectLinks'>Check It Out!</Button>
                                      </form>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className='project2'>
                            <Card style={{ width: '410px', height: '390px' }} className='cardBorder'>
                                <Card.Img variant="top" src="./zodiac2.png" className='zodiacImage' />
                                <Card.Body className='projectBody'>
                                    <Card.Title className='bold'>Zodiac App</Card.Title>
                                    <Card.Text>
                                        This react application provides the user with selective information about their own zodiac sign using images as links
                                      </Card.Text>
                                      <form action="https://github.com/MaryHooker/Projects/tree/master/zodiac-app" target='_blank'>
                                      <Button type='submit' className='projectLinks'>Check It Out!</Button>
                                      </form>
                                    {/* <a variant="primary" href='https://github.com/MaryHooker/Projects/tree/master/zodiac-app' className='projectLinks'>Check It Out!</a> */}
                                </Card.Body>
                            </Card>
                        </div>

                        <div className='project3'>
                            <Card style={{ width: '410px', height: '390px' }} className='cardBorder'>
                                <Card.Img variant="top" src="./favorites2.png" className='favoritesImage' />
                                <Card.Body className='projectBody'>
                                    <Card.Title className='bold'>Favorites App</Card.Title>
                                    <Card.Text>
                                        This react application tells the user of my own personal favorites in my chosen categories and asks for the users as well
                                      </Card.Text>
                                      <form action="https://github.com/MaryHooker/Projects/tree/master/favorite-things-app" target='_blank'>
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