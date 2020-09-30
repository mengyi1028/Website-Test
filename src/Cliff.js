import React from "react"
import { Container, Row, Col } from 'react-grid-system';

function Cliff(){
    return(
        <div class="cliff">
             <Container>
                <Row>
                    <Col xs={5}>
                        <img src="https://i.postimg.cc/L6vLgDVR/cliff610.jpg" 
                        alt="img" id="bo" width="125px" height="105px"></img>
                       
                    </Col>
                    <Col >
                        <div>
                            <span class="title">Assassin Creed</span>
                            <span id="intro">
                            The truth is written in blood
                                all is forgotten but never seen.
                                Assassins will come to those that
                                disrespect our laws.  
                            </span>
                        </div>
                    </Col>                                      
                </Row>
            </Container>
        </div>
    )
}
export default Cliff