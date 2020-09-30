import React from "react"
import { Container, Row, Col } from 'react-grid-system';

function ContentA(){
    return(
        <div>
             <Container>
                <Row>
                    <Col xs={4}>
                        <img src="https://i.postimg.cc/yY2LTxTQ/apps-65269-63429251539778806-9a616742-f939-4dd7-b359-e2c37d8d16a4.jpg" 
                        alt="img" id="bo" width="140px" height="90px"></img>
                       
                    </Col>
                    <Col >
                        <div>
                            <span class="title">Assassin Creed</span>
                            <span id="intro">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor mattis ornare. Praesent vel molestie felis. Proin ut nibh quis ante condimentum
                             vestibulum ut sit amet tortor. Aliquam erat volutpat.
                             </span>
                            
                        </div>
                    </Col>                                      
                </Row>
            </Container>
        </div>
    )
}
export default ContentA