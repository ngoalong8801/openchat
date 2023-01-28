package com.pm.openchat.server.mapper;

import com.pm.openchat.server.dto.res.ChatResponse;
import com.pm.openchat.server.entity.ChatRoomEntity;
import org.springframework.stereotype.Component;

@Component
public class ChatRoomMapper {

    public ChatResponse EntityToResponse(ChatRoomEntity chatRoomEntity){
        return new ChatResponse(
                chatRoomEntity.getUserName(),
                chatRoomEntity.getImage(),
                chatRoomEntity.getMessage(),
                chatRoomEntity.getTime()
        );
    }
}
