import React from "react"
import { Container, Row, Col } from 'react-grid-system';

function Ezio(){
    return(
        <div class="ezio">
             <Container>
                <Row>
                    <Col xs={5}>
                        <img src="https://i.postimg.cc/yY2LTxTQ/apps-65269-63429251539778806-9a616742-f939-4dd7-b359-e2c37d8d16a4.jpg" 
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
export default Ezio