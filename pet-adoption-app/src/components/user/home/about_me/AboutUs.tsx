import React from 'react'
import Navbar from '../../../navbar/Navbar'
import { Card, Col, Container, Row } from 'react-bootstrap'

import flower_dog from "../../../../img/flower-dog.jpg";
import aussie_puppy from "../../../../img/aussiepuppy.jpg";
import cat from "../../../../img/cat.jpg";

function AboutUs() {
  return (
    <div className='root'>
    <Navbar/>

    <Container>
        <div className='contactgroup'>
            <div className='contacttitlehead'>
                <h1 className='contacttitle'> About Us</h1>
            </div>
            <p className='contactparagraph'> 
                Our mission is to end the suffering of precious animals and give them a second breath at life with
                loving family. These aniamls haven't had a great life but have so much love and joy to bring to any one. 
                By adopting today, you will a new journey with a smile on your face.
            </p>
        </div>

      <section>
        <div className='contacttitlehead3'>
            <h1 className='contacttitle'> Some success stories</h1>
        </div>
        {/* Add images of dogs with their owners */}
        <div className='contentimggroup'>
          <Row>
            <Col>
              <Card>
                <img className='contentimg' src={aussie_puppy} alt="picture of an aussie puppy" />
                <caption>By Mark - We love our pet</caption>
              </Card>
            </Col>
            <Col>
              <Card>
                <img className='contentimg' src={aussie_puppy} alt="picture of an aussie puppy" />
                <caption>By Mark - We love our pet</caption>
              </Card>
            </Col><Col>
              <Card>
                <img className='contentimg' src={aussie_puppy} alt="picture of an aussie puppy" />
                <caption>By Mark - We love our pet</caption>
              </Card>
            </Col>
           
          </Row>
        </div>
        
      </section>
        

        
    </Container>
    
</div>
  )
}

export default AboutUs