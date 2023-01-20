package com.pm.openchat.server.dto.res;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class MessageResponse {
    private String userName;
    private String message;
    private String image;
    private LocalDateTime time;
}
