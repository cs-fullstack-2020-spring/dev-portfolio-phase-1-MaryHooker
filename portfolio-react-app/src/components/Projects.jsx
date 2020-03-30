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
                    <img src="https://i7.pngguru.com/preview/840/443/663/web-development-html-css3-canvas-element-web-design-w3c-html5-logo.jpg" alt="html" className='htmlLogo' />
                </div>
                <div className='css'>
                    <img src="https://p1.hiclipart.com/preview/326/868/1022/css3-badge-blue-and-white-css-icon-png-clipart.jpg" alt="css" className='cssLogo' />
                </div>
                <div className='js'>
                    <img src="https://thumbnail.imgbin.com/0/8/11/imgbin-javascript-logo-html-javascript-logo-1gJt6c05WzKXQuybWYgXvaTYk_t.jpg" alt="js" className='jsLogo' />
                </div>
                <div className='react'>
                    <img src="https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png" alt="react" className='reactLogo' />
                </div>

                <div className='project1'>
                    <h3>Project 1</h3>
                    <h4>Image/Link</h4>
                    <p>Description of Project 1</p>
                </div>
                <div className='project2'>
                    <h3>Project 2</h3>
                    <h4>Image/Link</h4>
                    <p>Description of Project 2</p>
                </div>
                <div className='project3'>
                    <h3>Project 3</h3>
                    <h4>Image/Link</h4>
                    <p>Description of Project 3</p>
                </div>

            </div >
        );
    }
}

export default Projects;