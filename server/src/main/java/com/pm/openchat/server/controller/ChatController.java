package com.pm.openchat.server.controller;

import com.pm.openchat.server.dto.req.MessageRequest;
import com.pm.openchat.server.dto.res.ChatResponse;
import com.pm.openchat.server.service.ChatRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class ChatController {
    @Autowired
    ChatRoomService chatRoomService;
    @GetMapping("/chat/{groupId}")
    public @ResponseBody List<ChatResponse> getChatHistory(@PathVariable int groupId){
        var chatHistory = chatRoomService.getChatHistory(groupId);
        return chatHistory;
    }

    @MessageMapping("/chat/{groupId}")
    @SendTo("/topic/chat/{groupId}")
    public ChatResponse deliveryMessage(MessageRequest message){
        var chat = chatRoomService.handleMessage(message);

        return new ChatResponse(
                message.getUserName(),
                message.getImage(),
               message.getMessage(),
               chat.getTime());
    }
}
