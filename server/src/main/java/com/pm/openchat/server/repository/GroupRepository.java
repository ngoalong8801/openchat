package com.pm.openchat.server.repository;

import com.pm.openchat.server.entity.GroupEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface GroupRepository extends CrudRepository<GroupEntity, Integer> {
    @Query(value = "select g from GroupEntity g left join fetch g.chats c where g.id = :id")
    GroupEntity findById(@Param("id") int id);
}
