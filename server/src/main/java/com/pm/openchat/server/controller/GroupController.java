package com.pm.openchat.server.controller;

import com.pm.openchat.server.dto.req.GroupRequest;
import com.pm.openchat.server.dto.res.GroupResponse;
import com.pm.openchat.server.entity.GroupEntity;
import com.pm.openchat.server.repository.GroupRepository;
import com.pm.openchat.server.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GroupController {

    @Autowired
    GroupRepository groupRepository;

    @Autowired
    GroupService groupService;

    @GetMapping(path = "/groups/all")
    public @ResponseBody List<GroupResponse> getAllGroups(){

        return groupService.getAllGroups();
    }

    @PostMapping(path = "groups/add")
    public @ResponseBody GroupEntity addGroup(@RequestBody GroupRequest group){
       return  groupService.addGroup(group);
    }

    @PostMapping(path = "groups/delete")
    public @ResponseBody Integer deleteGroup(@RequestBody Integer id){
        return  groupService.deleteGroup(id);
    }
}
