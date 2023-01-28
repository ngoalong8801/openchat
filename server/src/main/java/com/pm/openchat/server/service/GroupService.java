package com.pm.openchat.server.service;

import com.pm.openchat.server.dto.req.GroupRequest;
import com.pm.openchat.server.dto.res.GroupResponse;
import com.pm.openchat.server.entity.GroupEntity;
import com.pm.openchat.server.mapper.GroupMapper;
import com.pm.openchat.server.repository.GroupRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Log4j2
public class GroupService {
    @Autowired
    GroupRepository groupRepository;
    @Autowired
    GroupMapper groupMapper;

    public List<GroupResponse> getAllGroups(){
        List<GroupResponse> groups = new ArrayList<>();
        var groupIterable = groupRepository.findAll();
        for(GroupEntity entity: groupIterable){
                groups.add(groupMapper.EntityToResponse(entity));
        }
        return groups;
    }

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
