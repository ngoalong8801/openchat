package com.pm.openchat.server.mapper;

import com.pm.openchat.server.dto.res.GroupResponse;
import com.pm.openchat.server.entity.GroupEntity;
import org.springframework.stereotype.Component;

import javax.swing.text.html.parser.Entity;

@Component
public class GroupMapper {

    public GroupResponse EntityToResponse(GroupEntity entity){
        return new GroupResponse(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getImage()
        );
    }
}
