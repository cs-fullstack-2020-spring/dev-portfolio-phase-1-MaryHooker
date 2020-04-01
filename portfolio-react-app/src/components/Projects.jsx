import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='projectsContainer'>

                <div className='html'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="html" className='htmlLogo' />
                </div>
                <div className='css'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png" alt="css" className='cssLogo' />
                </div>
                <div className='js'>
                    <img src="https://pluspng.com/img-png/logo-javascript-png-java-script-js-logo-format-ai-javascript-logo-vector-png-213.png" alt="js" className='jsLogo' />
                </div>
                <div className='react'>
                    <img src="https://toppng.com/public/uploads/thumbnail/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994bz4gmmu3qd.png" alt="react" className='reactLogo' />
                </div>

                <div className='project1'>
                    <h2>Dream Journal App</h2>
                    <img src="./dreamApp.png" alt="dream joural" className='dreamImage'/>
                    <br/>
                    <a href="https://github.com/cs-fullstack-2020-spring/200317-react-forms-events-practice-MaryHooker" className='projectLinks'>Check It Out</a>

                    <p className='dreamFavoritesDescription'>This react application gives the user a chance to record everything they would need to remember about their dreams using a form field and a map function</p>
                </div>
                <div className='project2'>
                    <h2>Zodiac App</h2>
                    <img src="./zodiacApp.png" alt="zodiacImage" className='zodiacImage'/>
                    <br/>
                    <a href="https://github.com/MaryHooker/Projects/tree/master/zodiac-app" className='projectLinks'>Check It Out</a>

                    <p className='zodiacDescription'>This react application provides the user with selective information about their own zodiac sign using images as links</p>
                </div>
                <div className='project3'>
                    <h2>Favorites App</h2>
                    <img src="./favoritesApp.png" alt="favoritesImage" className='favoritesImage'/>
                    <br/>
                    <a href="https://github.com/MaryHooker/Projects/tree/master/favorite-things-app" className='projectLinks'>Check It Out</a>
                   
                    <p className='dreamFavoritesDescription'>This react application tells the user of my own personal favorites in my chosen categories and asks for the users as well using links and conidtional rendering</p>
                   
                </div>

            </div >
        );
    }
}

export default Projects;