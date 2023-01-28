package com.pm.openchat.server.dto.res;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GroupResponse {
    private int id;
    private String name;
    private String description;
    private String image;

}
