import React, { Component } from 'react';
import {Animated} from "react-animated-css";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='formSpace'>
                <Animated animationIn="rotateInUpRight" animationOut="flipOutY" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdcx6YgyarREoAP8rGTKijtNqPR_GF9Rqa9Qu-XVc3SyrcAKw/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0" className="contactForm" title='form'>Loading…</iframe>
                </Animated>
            </div>
        );
    }
}

export default Contact;