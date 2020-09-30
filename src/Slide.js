import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Ezio from "./ezio";
import Cliff from "./Cliff";
import Kill from "./Kill";
function Slide(){
    return(
        <div class="slide">
           
            <Container >
                <Row>
                    <Col xs={4}>
                        <Ezio />
                    </Col>
                    <Col >
                        <Cliff />
                    </Col>
                    <Col>
                        <Kill />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Slide