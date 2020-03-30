import React, { Component } from 'react';
import Resume from './Resume';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
// import Image from '/home/student/Downloads/image0 (5).jpeg';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='aboutMeContainer'>
                <div className='imageMe'>
                    <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX38348134.jpg' alt="avatar" className='imageSize'/>
                </div>
                <div className='aboutMeText'>
                    <p>Hi! My name is Mary Hooker and I'm a full stack software developer.  I'm most interested in front-end web development but I'm open to all positions and push for the best in everything I do. My education started with CodeCrew Code School and I intend to further my education throughout my career.</p>
                </div>
                <div className='logo'>
                    <img src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4971/s300/code-school-logo-3-3-.png" alt="logo"  className='logoSize'/>
                </div>
                <div className='resume'>
                    <Router>
                        <Link to='/resume' className='resumeLink'>Resume</Link>
                        <Route path='/resume'>
                            <Resume/>
                        </Route>
                    </Router>
                </div>
            </div>
        );
    }
}

export default AboutMe;