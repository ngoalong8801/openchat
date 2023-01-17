import React from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
function Chat1() {


    return (
        <Container fluid className="py-3 h-100" style={{ backgroundColor: 'rgb(238, 238, 238)', }}>
            <Row className="h-100 mb-3">
                <Col lg="5" md="6" className="h-100">
                    <h3 className="font-weight-bold mb-3 text-center text-lg-start">Group</h3>
                    <Card className="mb-7 h-100 bottom-1">
                        <Card.Body>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" className="p-2 border-bottom">
                                    <a href="#" className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJplxupey2YZYWtoPFeVkIUqkwhYa_MeeJw&usqp=CAU"
                                                alt="group-chat"
                                                width="70"
                                                height="60"
                                                className="me-3"
                                            />
                                            <h5 className="mt-3">Group 1</h5>
                                        </div>
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="p-2 border-bottom">
                                    <a href="#" className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJplxupey2YZYWtoPFeVkIUqkwhYa_MeeJw&usqp=CAU"
                                                alt="group-chat"
                                                width="70"
                                                height="60"
                                                className="me-3"
                                            />
                                            <h5 className="mt-3">Group 1</h5>
                                        </div>
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="p-2 border-bottom">
                                    <a href="#" className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJplxupey2YZYWtoPFeVkIUqkwhYa_MeeJw&usqp=CAU"
                                                alt="group-chat"
                                                width="70"
                                                height="60"
                                                className="me-3"
                                            />
                                            <h5 className="mt-3">Group 1</h5>
                                        </div>
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="p-2 border-bottom">
                                    <a href="#" className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJplxupey2YZYWtoPFeVkIUqkwhYa_MeeJw&usqp=CAU"
                                                alt="group-chat"
                                                width="70"
                                                height="60"
                                                className="me-3"
                                            />
                                            <h5 className="mt-3">Group 1</h5>
                                        </div>
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="p-2 border-bottom">
                                    <a href="#" className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJplxupey2YZYWtoPFeVkIUqkwhYa_MeeJw&usqp=CAU"
                                                alt="group-chat"
                                                width="70"
                                                height="60"
                                                className="me-3"
                                            />
                                            <h5 className="mt-3">Group 1</h5>
                                        </div>
                                    </a>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="7" md="6" className="h-100 mt-5">
                    <Card className="h-100">
                        <ListGroup as="ul" className="h-100">
                            <ListGroup.Item as="li" className="d-flex justify-content-between mb-4">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBAwK3hV1W9YiLeJPzzJ0MufbPStwi3r_Tw&usqp=CAU"
                                    alt="avatar"
                                    width="90"
                                    height="100"
                                    className="me-3 rounded-circle"
                                />
                                <Card className="flex-grow-1">
                                    <Card.Header className="d-flex justify-content-between p-1">
                                        <p className="fw-bold mb-0">Taranka</p>
                                        <p className="fa fa-clock mb-0">
                                            <i>12 minutes ago</i>
                                        </p>
                                    </Card.Header>
                                    <Card.Body>
                                        <p>ada</p>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="d-flex justify-content-between mb-4">

                                <Card className="flex-grow-1">
                                    <Card.Header className="d-flex justify-content-between p-1">
                                        <p className="fw-bold mb-0">Ronaldo</p>
                                        <p className="fa fa-clock mb-0">
                                            <i>12 minutes ago</i>
                                        </p>
                                    </Card.Header>
                                    <Card.Body>
                                        <p>ada</p>
                                    </Card.Body>
                                </Card>

                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
                                    alt="avatar"
                                    width="90"
                                    height="100"
                                    className="ms-3 rounded-circle"
                                />
                            </ListGroup.Item>

                            <ListGroup.Item className="mt-auto">
                                <Form>
                                    <Form.Group className="mb-3 d-flex flex-column" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} />
                                        <Button variant="secondary" className="align-self-end m-2">Send</Button>
                                    </Form.Group>
                                </Form>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Chat1