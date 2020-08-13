import React, { Component } from 'react';
import { Animated } from "react-animated-css";

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='resumePosition'>

                <Animated animationIn="fadeInUp" animationOut="flipOutY" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    {/* <img src="/public/images/demo.jpg" /> */}
                    <embed src="/Resume2020.pdf" height='640px' width='100%' className='resumeComp' />
                </Animated>
            </div>
        );
    }
}

export default Resume;