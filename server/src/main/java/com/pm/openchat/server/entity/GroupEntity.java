package com.pm.openchat.server.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class GroupEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String name;
    private String description;
    @Column(length = 1000)
    private String image;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "group", cascade=CascadeType.ALL,orphanRemoval=true)
    private List<ChatRoomEntity> chats = new ArrayList<>();

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


    public List<ChatRoomEntity> getChats() {
        return chats;
    }

    public void setChats(List<ChatRoomEntity> chats) {
        this.chats = chats;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public GroupEntity(String name, String description, String image) {
        this.name = name;
        this.description = description;
        this.image = image;
    }

    public GroupEntity() {
    }
}
