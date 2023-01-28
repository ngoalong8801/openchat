package com.pm.openchat.server.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
public class ChatRoomEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String userName;
    private String image;
    private String message;
    private java.sql.Timestamp time;

    @ManyToOne
    @JoinColumn(name = "group_entity_id")
    private GroupEntity group;

    public ChatRoomEntity() {
    }

    public ChatRoomEntity(Integer id, String userName, String image, String message, Timestamp time, GroupEntity group) {
        this.id = id;
        this.userName = userName;
        this.image = image;
        this.message = message;
        this.time = time;
        this.group = group;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    public GroupEntity getGroup() {
        return group;
    }

    public void setGroup(GroupEntity group) {
        this.group = group;
    }
}
