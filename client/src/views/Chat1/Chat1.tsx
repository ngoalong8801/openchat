import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row, Modal } from "react-bootstrap";
import {Trash} from "react-bootstrap-icons"
import Form from 'react-bootstrap/Form';
import {Group} from '../../store/Reducers/groupSlice'
import { useAppDispatch, useAppSelector} from "../../store/hook";
import {fetchGroups, selectAllGroups, groupStatus, addGroup, deleteGroup} from '../../store/Reducers/groupSlice'
import generatePic from "../../utils/helpers/generatePic";

function Chat1() {
    const [show, setShow] = useState(false);
    const [dltModal, setDltModal] = useState(false);
    const handleDltShow = (id: number) => () =>{
        setDltModal(true);
        setDltID(id)
    }
    const handleDltClose = () => setDltModal(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useAppDispatch()
    const groups = useAppSelector(selectAllGroups)
    const groupsStatus = useAppSelector(groupStatus)
    
    const [gname, setGname] = useState("")
    const [gDesc, setGDesc] = useState("")

    const [dltID, setDltID] = useState(0)

    const addGroupState = () => {
        dispatch(addGroup({name: gname, description: gDesc, image: generatePic().url} as Group))
        handleClose()
    }


    const deleteGroupById = () => {
        dispatch(deleteGroup(dltID))
        handleDltClose()
    }
   

    useEffect(() => {
        if(groupsStatus === 'idle'){
            dispatch(fetchGroups())
        }
        
    }, [dispatch, groupsStatus])
    
    return (
        <Container fluid className="py-3 h-100" style={{ backgroundColor: 'rgb(238, 238, 238)', }}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="typing group's name"
                autoFocus
                onChange={(e) => setGname(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setGDesc(e.target.value)}/>
            </Form.Group>
          </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addGroupState}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={dltModal} onHide={handleDltClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete this group
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDltClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={deleteGroupById}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="h-100 mb-3">
                <Col lg="5" md="6" className="h-100">
                    <h3 className="font-weight-bold mb-3 text-center text-lg-start">Group</h3>
                    <Card className="mb-7 h-100 bottom-1">
                        <div className="d-flex mt-2 me-2 justify-content-end pe-2">
                            <Button onClick={handleShow} className="align-self-center" variant="secondary">
                                <i className="bi bi-plus"><span style={{ fontSize: '20px' }}>+</span></i>
                            </Button>
                        </div>
                        <Card.Body>
                            <ListGroup as="ul">
                                {groups.map((group, index) => {
                                    return (
                                    <ListGroup.Item key={index} as="li" className="p-2 border-bottom">
                                    <a href="#" className="d-flex justify-content-between">
                                        <div className="d-flex w-100">
                                            <img
                                                src={group.image}
                                                alt="group-chat"
                                                width="70"
                                                height="60"
                                                className="me-3"
                                            />
                                            <h5 className="mt-3">{group.name}</h5>
                                            <Button onClick={handleDltShow(group.id)} variant="default" className="ms-auto">
                                                <Trash size="20" color="red"></Trash>
                                            </Button>
                                        </div>
                                    </a>
                                </ListGroup.Item>
                                    );
                            })}
                                

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