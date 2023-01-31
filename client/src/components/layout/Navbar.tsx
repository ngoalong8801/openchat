import React, { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { newUser, logOut } from '../../store/Reducers/User/userSlice'
import { RootState } from '../../store/store';
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import './Navbar.css'
import logo  from '../../assets/3d-quote-bubble-chat-with-open-space-wood-plank-wall_509562-341.webp'
function Navbar(){
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <nav
      className="navbar navbar-light"
      style={{backgroundColor: '#6c757d'}}
      role="navigation"
      aria-label="main navigation"
    >
    <div className="container-fluid w-100">
      <div className="d-flex align-items-center brand">
        <img className="mx-1 me-4 rounded border border-secondary" src={logo} alt="avt-brand" width='50' height='50' />
        <a className="navbar-brand" href="#"><h2>Open Chat</h2></a>
      </div>
      
      <div className="info">
      <Form onSubmit={(e) => {
        e.preventDefault()
        dispatch(logOut())
        navigate("/");
      }} className="d-inline-flex align-items-center info info-form">
        <h4 id="username">{user.name} </h4>
        <Button type="submit" variant="secondary" >Log out</Button>
      </Form>
    </div>
    </div>

    

    </nav>
  );
};
 
 export default Navbar;