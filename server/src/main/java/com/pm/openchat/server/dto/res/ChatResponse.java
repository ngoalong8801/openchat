package com.pm.openchat.server.dto.res;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
public class ChatResponse {
    private String userName;
    private String image;
    private String message;

    private Timestamp time;

}
