package com.pm.openchat.server.dto.req;

import lombok.Data;

@Data
public class GroupRequest {
    private String name;
    private String description;
    private String image;
}
