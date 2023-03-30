package com.codecool.elproyectegrande.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import jakarta.annotation.Resource;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Category {

    private int id;
    private String name;

    public Category(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof Category other)) {
            return false;
        }
        return this.name.equals(other.name) && this.id==other.id;
    }
}
