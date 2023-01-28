package com.pm.openchat.server.repository;

import com.pm.openchat.server.entity.ChatRoomEntity;
import com.pm.openchat.server.entity.GroupEntity;
import org.springframework.data.repository.CrudRepository;

public interface ChatRoomRepository extends CrudRepository<ChatRoomEntity, Integer> {
}
