import React from "react"
import { Container, Row, Col } from 'react-grid-system'
import Left from "./Left"
import Right from "./Right"

function Intro(){
    return(
       <div class="intro">
           <Container>
               <Row>
                   <Col xs={5}>
                       <Left />
                   </Col>
                   <Col>
                       <Right />
                   </Col>
               </Row>
           </Container>           
        </div> 
    )
}
export default Intro