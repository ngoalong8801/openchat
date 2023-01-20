package com.pm.openchat.server.dto.req;

import lombok.Data;

@Data
public class MessageRequest {
    private String userName;
    private String message;
    private String image;
}
