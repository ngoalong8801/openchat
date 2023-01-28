package com.pm.openchat.server.service;

import com.pm.openchat.server.dto.req.MessageRequest;
import com.pm.openchat.server.dto.res.ChatResponse;
import com.pm.openchat.server.entity.ChatRoomEntity;
import com.pm.openchat.server.mapper.ChatRoomMapper;
import com.pm.openchat.server.repository.ChatRoomRepository;
import com.pm.openchat.server.repository.GroupRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;

import java.sql.Timestamp;
import java.util.List;

@Service
@RequiredArgsConstructor
@Log4j2
public class ChatRoomService {
    @Autowired
    GroupRepository groupRepository;

    @Autowired
    ChatRoomRepository chatRoomRepository;
    @Autowired
    ChatRoomMapper chatRoomMapper;

    public List<ChatResponse> getChatHistory(int groupId){
        var group = groupRepository.findById(groupId);
        var response = group.getChats().stream().map(chat -> chatRoomMapper.EntityToResponse(chat)).toList();
        return response;
    }

    public ChatRoomEntity handleMessage(MessageRequest messageRequest){
        var room = groupRepository.findById(messageRequest.getRoomId());
        var chat = new ChatRoomEntity();
        chat.setMessage(messageRequest.getMessage());
        chat.setImage(messageRequest.getImage());
        Date date = new Date();
        chat.setTime(new Timestamp(date.getTime()));
        chat.setGroup(room);
        chat.setUserName(messageRequest.getUserName());
        chatRoomRepository.save(chat);

        return chat;
    }
}
