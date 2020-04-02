import React, { Component } from 'react';
import Resume from './Resume';
import {BrowserRouter as Switch,Route} from 'react-router-dom';
import OpeningPage from './OpeningPage';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {


        return (
            <div className='aboutMeContainer'>
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={OpeningPage} />
                            <Route path="/resume" component={Resume} />
                        </Switch>
                    </BrowserRouter>

                    {/* <div className='resume'> */}


                    {/* <Link to="DeveloperResFINALReactNot.pdf" download>Resume</Link>
                                <Link to="/aboutme">About Me</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/contact">Contact</Link> */}

                    {/* <Router>
                            <Link to='/maryresume2020.pdf' className='resumeLink'>My Resume</Link>
                            <Route path='/resume' download>
                            <Resume className='resumeDisplay'/>
                        </Route>
                        </Router> */}

                </div>

                <div className='imageMe'>
                    <img src="/me3.gif" alt="me" className='imageSize' />
                </div>
                <div className='aboutMeText'>
                    <p>Hi! My name is Mary Hooker and I'm a full stack software developer.  I'm most interested in front-end web development but I'm open to all positions and push for the best in everything I do. My education started with CodeCrew Code School and I intend to further my education throughout my career.</p>
                </div>
                <div className='logo'>
                    <img src="/codeCrewLogo3.png" alt="logo" className='logoSize' />
                </div>

            </div >
        );
    }
}

export default AboutMe;