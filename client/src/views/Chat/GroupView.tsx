import React, { useEffect, useState , useRef} from "react";
import { Button, Card, Col, Container, ListGroup, Row, Modal } from "react-bootstrap";
import {Trash} from "react-bootstrap-icons"
import Form from 'react-bootstrap/Form';
import {Group} from '../../store/Reducers/groupSlice'
import { useAppDispatch, useAppSelector} from "../../store/hook";
import {fetchGroups, selectAllGroups, groupStatus, addGroup, deleteGroup} from '../../store/Reducers/groupSlice'
import generatePic from "../../utils/helpers/generatePic";
import group from '../../assets/group.json'
import { GroupProps } from "./Chat";

const GroupView = ({callback} : GroupProps) => {
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
        dispatch(addGroup({name: gname, description: gDesc, image: generatePic(group).url} as Group))
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

    useEffect(() => {
        callback((groups.length >=1) ? groups[0].id : 0);
    }, [groups])

    return (
        <>
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
                                    <a href="#" className="d-flex justify-content-between" onClick={() => callback(group.id)}>
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
                    </>
    )
}

export default GroupView