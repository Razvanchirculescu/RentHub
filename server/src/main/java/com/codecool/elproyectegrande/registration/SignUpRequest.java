package com.codecool.elproyectegrande.registration;

public record SignUpRequest(String name
        , String surname
        , String phoneNumber
        , String emailAddress
        , String password) {
}
