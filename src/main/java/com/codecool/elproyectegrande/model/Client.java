package com.codecool.elproyectegrande.model;

public class Client {
    private int id;
    private String name;
    private String surname;
    private String emailAddress;
    private String phoneNumber;

    public Client(int id, String name, String surname, String emailAddress, String phoneNumber) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
