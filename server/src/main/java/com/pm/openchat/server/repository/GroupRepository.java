package com.pm.openchat.server.repository;

import com.pm.openchat.server.entity.GroupEntity;
import org.springframework.data.repository.CrudRepository;

public interface GroupRepository extends CrudRepository<GroupEntity, Integer> {
}
