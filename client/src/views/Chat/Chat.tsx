import React, { useEffect, useState , useRef} from "react";
import { Button, Card, Col, Container, ListGroup, Row, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import GroupView from "./GroupView";
import Message from "./Message";
export interface GroupProps {
    callback: (groupId: number, groupName: string ) => void
}

export interface MessageProps{
    curGroup : number | undefined
    curGroupName: string | undefined
}

function Chat() {
    const [curGroup, setCurGroup] = useState<number>()
    const [curGroupName, setCurGroupName] = useState<string>()
    const callback = (groupID: number, name: string) => {
        setCurGroup(groupID)
        setCurGroupName(name)
    }

    return (
        <Container fluid className="py-3 h-100" style={{ backgroundColor: 'rgb(238, 238, 238)', }}>
            <Row className="h-100 mb-3">
                <Col lg="5" md="6" className="h-100">
                    <GroupView callback={callback} />
                </Col>
                <Col lg="7" md="6" className="h-100 mt-5">
                   <Message curGroup={curGroup} curGroupName={curGroupName} /> 
                </Col>
            </Row>
        </Container>
    );
}

export default Chat