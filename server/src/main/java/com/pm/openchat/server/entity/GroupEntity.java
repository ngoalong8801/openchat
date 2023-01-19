package com.pm.openchat.server.entity;

import jakarta.persistence.*;

@Entity
public class GroupEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String name;
    private String description;
    @Column(length = 1000)
    private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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
