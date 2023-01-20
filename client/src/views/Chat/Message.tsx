import React, { useEffect, useState , useRef} from "react";
import { Button, Card, ListGroup, Row, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { MessageProps } from "./Chat";


const Message = ({curGroup} : MessageProps) => {
    const messagesEndRef = useRef<HTMLAnchorElement | null>(null);;
    const scrollToBottom = () => {
         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

   
    useEffect(() => {
        scrollToBottom()
    }, [])

    useEffect(() => {
    }, [curGroup])

    return (
        <Card className="h-100">
                <div>{curGroup}</div>
                        <ListGroup as="ul" className="h-100 overflow-scroll">
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
                            <ListGroup.Item className="messageEndRef" ref={messagesEndRef}>
                            </ListGroup.Item>
                            
                        </ListGroup>

                        <Card.Footer className="mt-auto">
                                <Form>
                                    <Form.Group className="mb-3 d-flex flex-column" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} />
                                        <Button variant="secondary" className="align-self-end m-2">Send</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Footer>
                    </Card>
    );
}

export default Message