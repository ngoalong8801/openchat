package com.pm.openchat.server.service;

import com.pm.openchat.server.dto.req.GroupRequest;
import com.pm.openchat.server.entity.GroupEntity;
import com.pm.openchat.server.repository.GroupRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Log4j2
public class GroupService {
    @Autowired
    GroupRepository groupRepository;

    public GroupEntity addGroup(GroupRequest groupRequest){
        var group = new GroupEntity(groupRequest.getName(), groupRequest.getDescription(), groupRequest.getImage());
        groupRepository.save(group);

        return group;
    }

    public Integer deleteGroup(Integer id){
        groupRepository.deleteById(id);
        return id;
    }

}
