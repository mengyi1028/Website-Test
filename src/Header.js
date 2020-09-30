import React from "react"
import { Container, Row, Col } from 'react-grid-system';

import "./index.css" 
function Header() {
    return(
        <header>
            <div>
                <Container>
                    <Row>
                        <Col xs={3.7}>
                        <img src="https://i.postimg.cc/x8yj0d30/as.jpg" 
                        alt="assassin"width="300px" ></img>
                        </Col>
                        <Col xs={5} id="logo">
                        <img src="https://i.postimg.cc/N07HzQWw/Capture.jpg"
                        alt="logo" width="650px" height="80px"></img>
                        </Col>
                    </Row>
                </Container>       

            <ul>
                <li><a href="#home">GAME INFO</a></li>
                <li><a href="#">ASSASSINS CREED UNIVERSE</a></li>
                <li><a href="#">UPLAY</a></li>
                <li><a href="#">FORUMS</a></li>
                <li><a href="#">REGISTER FOR UPDATES</a></li>
                <li><a href="#">PRE-ORDER</a></li>
            </ul>
            </div>
            
        </header>
    )
}
export default Header