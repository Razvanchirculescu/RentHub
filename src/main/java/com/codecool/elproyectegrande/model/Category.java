package com.codecool.elproyectegrande.model;

public class Category {

    private int id;
    private String name;
    private String description;

    public Category(String name, String description) {
        this.description = description;
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public String getName() {
        return name;
    }
}
