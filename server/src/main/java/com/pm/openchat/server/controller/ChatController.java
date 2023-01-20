package com.pm.openchat.server.controller;

import com.pm.openchat.server.dto.req.MessageRequest;
import com.pm.openchat.server.dto.res.MessageResponse;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.time.LocalDateTime;

@Controller
public class ChatController {
    @MessageMapping("/chat/{groupId}")
    @SendTo("/topic/chat/{groupId}")
    public MessageResponse deliveryMessage(MessageRequest message){
        return new MessageResponse(
                message.getUserName(),
                message.getMessage(),
                message.getImage(),
                LocalDateTime.now());
    }
}
