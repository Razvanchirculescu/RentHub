package com.codecool.elproyectegrande.controller;


import com.codecool.elproyectegrande.registration.LogInRequest;
import com.codecool.elproyectegrande.registration.SignUpRequest;
import com.codecool.elproyectegrande.repository.ClientRepository;
import com.codecool.elproyectegrande.service.RegistrationService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@AllArgsConstructor
@RequestMapping(path = "api/accounts")
@CrossOrigin(origins = "http://localhost:3000"
        , methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE
        , RequestMethod.POST, RequestMethod.PATCH})
public class AccountController {

//    private final RegistrationService registrationService;
//    private final ClientRepository clientRepository;
    RegistrationService registrationService;
    ClientRepository clientRepository;

    @PostMapping("/register")
        public String signUp(@RequestBody SignUpRequest request){
        return registrationService.register(request);
    }

    @PostMapping("/login")
    public List<Serializable> logIn(@RequestBody LogInRequest request) {

//        ObjectMapper mapper = new ObjectMapper();
//        String json = mapper.writeValueAsString(clientRepository.findAll().stream()
//                .filter(client -> client.getEmailAddress().equals(request.email())));
//        return List.of(registrationService.logIn(request), json);

        System.out.println("login: "+List.of(registrationService.logIn(request), clientRepository.findByEmailAddress(request.email()).get()));

        return List.of(registrationService.logIn(request), clientRepository.findByEmailAddress(request.email()).get());

//        return List.of(registrationService.logIn(request), clientRepository.findAll().stream()
//                .filter(client -> client.getEmailAddress().equals(request.email())));
    }

}
