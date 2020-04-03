import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import {Card} from 'react-bootstrap';
// import {Link} from 'react-bootstrap';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Animated animationIn="bounceIn" animationOut="rotateOutDownRight" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>

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
                            <Card style={{ width: '432px' ,height: '360px' }} className='cardBorder'>
                                <Card.Img variant="top" src="./dream2.png" className='dreamImage'/>
                                <Card.Body>
                                    <Card.Title>Dream Journal App</Card.Title>
                                    <Card.Text>
                                    This react application gives the user a chance to record everything they would need to remember about their dreams using a form
                                      </Card.Text>
                                    <a variant="primary" href = 'https://github.com/cs-fullstack-2020-spring/200317-react-forms-events-practice-MaryHooker'>Check it out!</a>
                                </Card.Body>
                            </Card>
                            {/* <h4 className='dreamTitle'>Dream Journal App</h4>
                            <a href="https://github.com/cs-fullstack-2020-spring/200317-react-forms-events-practice-MaryHooker" className='dreamProjectLink'>Check It Out</a>
                            <img src="./dream2.png" alt="dream joural" className='dreamImage' />
                            <br />
                            <p className='dreamDescription'>This react application gives the user a chance to record everything they would need to remember about their dreams using a form</p> */}
                        </div>

                        <div className='project2'>
                            <Card style={{ width: '410px' ,height: '362px' }} className='cardBorder'>
                                <Card.Img variant="top" src="./zodiac2.png" className='zodiacImage'/>
                                <Card.Body>
                                    <Card.Title>Zodiac App</Card.Title>
                                    <Card.Text>
                                    This react application provides the user with selective information about their own zodiac sign using images as links
                                      </Card.Text>
                                    <a variant="primary" href = 'https://github.com/MaryHooker/Projects/tree/master/zodiac-app'>Check It Out!</a>
                                </Card.Body>
                            </Card>
                            {/* <h4 className='bold'>Zodiac App</h4>
                            <a href="https://github.com/MaryHooker/Projects/tree/master/zodiac-app" className='projectLinks'>Check It Out</a>
                            <img src="./zodiac2.png" alt="zodiacImage" className='zodiacImage' />
                            <br />
                            <p className='zodiacDescription'>This react application provides the user with selective information about their own zodiac sign using images as links</p> */}
                        </div>

                        <div className='project3'>
                        <Card style={{ width: '410px' ,height: '362px' }} className='cardBorder'>
                                <Card.Img variant="top" src="./favorites2.png" className='favoritesImage'/>
                                <Card.Body>
                                    <Card.Title>Favorites App</Card.Title>
                                    <Card.Text>
                                    This react application tells the user of my own personal favorites in my chosen categories and asks for the users as well using links
                                      </Card.Text>
                                    <a variant="primary" href = 'https://github.com/MaryHooker/Projects/tree/master/favorite-things-app'>Check It Out!</a>
                                </Card.Body>
                            </Card>
                            {/* <h4 className='bold'>Favorites App</h4>
                            <a href="https://github.com/MaryHooker/Projects/tree/master/favorite-things-app" className='projectLinks'>Check It Out</a>
                            <img src="./favorites2.png" alt="favoritesImage" className='favoritesImage' />
                            <br />
                            <p className='favoritesDescription'>This react application tells the user of my own personal favorites in my chosen categories and asks for the users as well using links</p> */}

                        </div>


                    </div >
                </Animated>
            </div >
        );
    }
}

export default Projects;