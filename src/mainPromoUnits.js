import React, {Component} from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slide from "./Slide"
class MainPromo extends Component{   
    
    render() {
        const fadeImages = [
            'https://i.postimg.cc/yY2LTxTQ/apps-65269-63429251539778806-9a616742-f939-4dd7-b359-e2c37d8d16a4.jpg',
            'https://i.postimg.cc/L6vLgDVR/cliff610.jpg',
            'https://i.postimg.cc/rpNsgKxS/acrev-media03-full-165320.jpg'
        ]
        return(
            <div className="slide-container">
                <Fade>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={fadeImages[0]} alt="first" />
                        </div>
                        
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={fadeImages[1]} alt="second" />
                        </div>
                       
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={fadeImages[2]}  alt="third" />
                        </div>
                       
                    </div>
                </Fade>
                <Slide />
            </div>
           
        );
    }    
}
export default MainPromo