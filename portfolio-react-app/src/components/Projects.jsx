import React,{Component} from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='projectsContainer'>

                <div className='languageLogos'>

                    <h3>Skills</h3>
               
                    <img src="https://i7.pngguru.com/preview/840/443/663/web-development-html-css3-canvas-element-web-design-w3c-html5-logo.jpg" alt="html" className='htmlLogo'/>
                
                    <img src="https://p1.hiclipart.com/preview/326/868/1022/css3-badge-blue-and-white-css-icon-png-clipart.jpg" alt="css" className='cssLogo'/>
               
              
                    <img src="https://thumbnail.imgbin.com/0/8/11/imgbin-javascript-logo-html-javascript-logo-1gJt6c05WzKXQuybWYgXvaTYk_t.jpg" alt="js" className='jsLogo'/>
                
                
                    <img src="https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png" alt="react" className='reactLogo'/>
                
                </div>

                <div>

                    <h3>Projects</h3>

                    
                </div>

                

            </div>
         );
    }
}
 
export default Projects;