import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import './Home.css'
import {  useDispatch } from 'react-redux'
import { newUser, UserState } from '../../store/Reducers/User/userSlice'
import { useNavigate } from "react-router-dom";
import generatePic from "../../utils/helpers/generatePic";
import avatar from '../../assets/avatar.json'
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
                dispatch(newUser({
                  name: user,
                  image: generatePic(avatar).url
                } as UserState))
                navigate('/chat')
                window.location.reload()
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
  );

}

export default Home;