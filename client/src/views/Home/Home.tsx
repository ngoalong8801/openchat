import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import './Home.css'
import {  useDispatch } from 'react-redux'
import { newUser } from '../../store/Reducers/User/userSlice'
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch()
  const [user, setUser] = useState("");
  const navigate = useNavigate(); 

  return (
    <div className="bg">

      <div className="home-center">
        <Container>
          <Row className="justify-content-center content">
            <Col>
              <Form onSubmit={(e) => {
                e.preventDefault()
                dispatch(newUser(user))
                navigate("/chat")
              }} 
              className="home-form">
                <h1>Welcome you to visit Open Chat</h1>
                <Form.Label htmlFor="username">Typing your name for joining with us:</Form.Label>
                <Form.Control
                  type="text"
                  id="username"
                  onChange={(e) => setUser(e.target.value)}
                />
                <Button type="submit" variant="secondary" id="button">Join</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>


    // <Container className="h-100 bg">
    //   <Row className="main h-100 justify-content-center ">
    //     <Form method="post" action="/users/new" className="">
    //       <h1>Welcome you to visit Open Chat</h1>
    //       <Form.Label htmlFor="username">Typing your name for joining with us:</Form.Label>
    //       <Form.Control
    //         type="text"
    //         id="username"
    //       /> 
    //       <Button type="submit" variant="info">Join</Button>
    //     </Form>
    //   </Row>
    // </Container>
  );

}

export default Home;