import React from 'react'
import "../user/home/userHome.css"

import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

function Navbar() {
  return (
    <>
    <nav className="navClass">
      {/* <Row>
        <Col lg={2}>
          <Link className="navLink" to="/about"> About Us</Link>
        </Col>
        <Col lg={2}>
          <Link className="navLink" to="/login"> Login</Link>
        </Col>
        <Col lg={2}>
          <Link className="navLink" to="/signup"> Sign Up</Link>
        </Col>
        <Col lg={2}>
          <Link className="navLink" to="/pets"> Pets</Link>
        </Col>
        <Col lg={2}>
          <Link className="navLink" to="/"> Home</Link>
        </Col>
      </Row> */}

          <Link className="navLink" to="/about"> About Us</Link>
          <Link className="navLink" to="/login"> Login</Link>
          <Link className="navLink" to="/signup"> Sign Up</Link>

          <Link className="navLink" to="/pets"> Pets</Link>

          <Link className="navLink" to="/"> Home</Link>
    </nav>
    
    </>
  )
}

export default Navbar