import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

function Footer(){
    return(
      <div>
          <Container>
              <Row class="foot">
                  <Col>
                    <img src="https://i.ytimg.com/vi/3T10YcgF3H4/maxresdefault.jpg"
                    alt="ubisoft" width="140px" height="80px"></img>
                  </Col>
                  <Col>
                  <img src="https://seeklogo.com/images/X/xbox-360-black-logo-5F703B00E3-seeklogo.com.png"
                  alt="xbox 360" width="140px" height="80px"></img>
                  </Col>
                  <Col>
                  <img src="https://pureinfotech.com/wp-content/uploads/2017/12/xbox_live_logo_old.jpg?x47118"
                  alt="xbox live" width="140px" height="80px"></img>
                  </Col>
                  <Col>
                  <img src="https://i.postimg.cc/fbf7XWbP/large-thumbnail.jpg"
                  alt="playstation 3" width="140px" height="80px"></img>
                  </Col>
                  <Col>
                  <img src=" https://i.postimg.cc/NF32SZMT/2410246487-73f3a0ee31-b.jpg"
                  alt="playstation" width="140px" height="80px"></img>
                  </Col>
                  <Col>
                  <img src="https://i.postimg.cc/nrGXz2G9/unnamed.png"
                  alt="DVD" width="140px" height="80px"></img>
                  </Col>
                  <Col>
                  <img src="https://i.postimg.cc/657sBq6t/blood.jpg"
                  alt="blood" width="140px" height="80px"></img>
                  </Col>
                 
              </Row>
          </Container>
          <span id="copyright">Copyright 2020, Mengyi Yang</span>
      </div>  
    )
}
export default Footer
