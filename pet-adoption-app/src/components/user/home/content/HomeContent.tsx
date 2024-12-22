import React from 'react'
import "../userHome.css"
import { Col, Container, Row } from 'react-bootstrap';

function UserHomeContent() {

  return (
    <div className='root'>
      <Container>
        <section className="midsectiongroup">
            <h2 className="midsection"> Adopt a Life today and save a Life</h2>
            <p className="midsection">Adopting a pets will bring happiness and joy in your Life. And we make adoption process easy.</p>

        </section>
        <div className="=buttoncontainer">
          <Row>
            <Col lg={4}></Col> 
            <Col>
              <section className="buttongroup">
                  <button className="button">Adopt Now</button>
              </section>
            </Col>
            <Col>
              <section className="buttongroup">
                  <button className="button">View All Pets</button>
              </section>
            </Col>
            <Col lg={4}></Col>             
          </Row>
        </div>
        
      </Container>
    
    </div>
  )
}

export default UserHomeContent