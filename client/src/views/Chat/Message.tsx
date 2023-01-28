import React, { useEffect, useState , useRef} from "react";
import { Button, Card, ListGroup, Row, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { MessageProps } from "./Chat";
import SockJS from 'sockjs-client';
import { IMessage, Stomp, StompSubscription } from "@stomp/stompjs";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../store/store";
import groupApi from "../../api/groupApi";
const socket = new SockJS('http:localhost:8080/ws')
const stompClient = Stomp.over(socket)

interface MessageRequest {
    userName: string
    image: string
    message: string
    roomId: number
}

function sendMessage(message: MessageRequest, curGroup: number | undefined){
    stompClient.send(`/app/chat/${curGroup}`, {}, JSON.stringify(message))
}




function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

interface MessageRes {
    userName: string
    image: string
    message: string
    time: string
}

const Message = ({curGroup, curGroupName} : MessageProps) => {
    const user = useSelector((state: RootState) => state.user)
    const messagesEndRef = useRef<HTMLAnchorElement | null>(null);;
    const scrollToBottom = () => {
         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const [conn, setConn] = useState(false)
    const [id, setId] = useState("")
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState<MessageRes[]>([])

    function connect(curGroup: number | undefined){
        stompClient.connect({}, function (frame: any) {
            setConn(true)
            console.log('Connected: ' + frame);
            let id  = stompClient.subscribe(`/topic/chat/${curGroup}`, handleResponse).id;
            setId(id)
        });
    }

    function handleResponse(res: IMessage){
        let data : MessageRes = JSON.parse(res.body)
            console.log("DATA RECEIVED")
            setMessages(mes => [...mes, data])
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

     useEffect(() => {
        const fetchChat = async () => {
            try{
                const res = await groupApi.get(`chat/${curGroup}`);
                const data = res.data as MessageRes[]
                setMessages(data)
            }
            catch(error){
                console.log(error)
            }
        }

        fetchChat()
       if(conn){
        stompClient.unsubscribe(id)
        let newID  = stompClient.subscribe(`/topic/chat/${curGroup}`, handleResponse).id;
        setId(newID)
       }else{
        connect(curGroup)
       }
    }, [curGroup])

    return (
        <Card className="h-100">
                <h3>{curGroupName}</h3>
                        <ListGroup as="ul" className="h-100 overflow-scroll">
                            {messages.map(mes => {
                                return (<ListGroup.Item as="li" className="d-flex justify-content-between mb-4">
                                <img
                                    src={mes.image}
                                    alt="avatar"
                                    height="100"
                                    className="me-3 rounded-circle"
                                />
                                <Card className="flex-grow-1">
                                    <Card.Header className="d-flex justify-content-between p-1">
                                        <p className="fw-bold mb-0">{mes.userName}</p>
                                        <p className="fa fa-clock mb-0">
                                            <i>12 minutes ago</i>
                                        </p>
                                    </Card.Header>
                                    <Card.Body>
                                        <p>{mes.message}</p>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>
                            );}
                            )}
                       
                            <ListGroup.Item className="messageEndRef" ref={messagesEndRef}>
                            </ListGroup.Item>
                            
                        </ListGroup>

                        <Card.Footer className="mt-auto">
                                <Form>
                                    <Form.Group className="mb-3 d-flex flex-column" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} onChange={(e) => {setMessage(e.target.value)}} />
                                        <Button onClick={() => {
                                            sendMessage({userName: user.name,
                                                        image: user.image,
                                                        message: message,
                                                        roomId: curGroup
                                                    } as MessageRequest, curGroup)
                                        }} variant="secondary" className="align-self-end m-2">Send</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Footer>
                    </Card>
    );
}

export default Message




     {/* <ListGroup.Item as="li" className="d-flex justify-content-between mb-4">

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
                            </ListGroup.Item> */}