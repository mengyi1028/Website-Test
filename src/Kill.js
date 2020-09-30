import React from "react"
import { Container, Row, Col } from 'react-grid-system';

function Kill(){
    return(
        <div class="kill">
             <Container>
                <Row>
                    <Col xs={5}>
                        <img src="https://i.postimg.cc/rpNsgKxS/acrev-media03-full-165320.jpg" 
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
export default Kill