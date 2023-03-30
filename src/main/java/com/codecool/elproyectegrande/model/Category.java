package com.codecool.elproyectegrande.model;

public class Category {

//    private int id;
    private String name;

    public Category(String name) {
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
        return this.name.equals(other.name);
    }
}
