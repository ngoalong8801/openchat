import React, { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { newUser, logOut } from '../../store/Reducers/User/userSlice'
import { RootState } from '../../store/store';
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import './Navbar.css'
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
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><h2>Open Chat</h2></a>
      <div>

      <Form onSubmit={(e) => {
        e.preventDefault()
        dispatch(logOut())
        navigate("/");
      }} className="d-inline-flex align-items-center justify-content-center">
        <h4 id="username">{user.name} </h4>
        <Button type="submit" variant="secondary" >Log out</Button>
      </Form>
    </div>
    </div>

    

    </nav>
  );
};
 
 export default Navbar;