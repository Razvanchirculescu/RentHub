package com.codecool.elproyectegrande.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordEncoder {

    static BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public static String passwordEncoder(String password){
        return passwordEncoder.encode(password);
    }

}
