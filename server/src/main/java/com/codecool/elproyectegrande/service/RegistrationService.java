package com.codecool.elproyectegrande.service;


import com.codecool.elproyectegrande.email.EmailValidator;
import com.codecool.elproyectegrande.model.Client;
import com.codecool.elproyectegrande.model.ClientRole;
import com.codecool.elproyectegrande.registration.LogInRequest;
import com.codecool.elproyectegrande.registration.SignUpRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final ClientService clientService;
    private final EmailValidator emailValidator;

    private final RepositoryBackedUserDetailsService repositoryBackedUserDetailsService;

    public String register(SignUpRequest request) {
        boolean isValidEmail = emailValidator.test(request.emailAddress());
        if (!isValidEmail) {
            throw new IllegalStateException("email not valid");
        }
        return clientService.signUpClient(new Client(
                request.name()
                , request.surname()
                , request.phoneNumber()
                , request.emailAddress()
                , request.password()
                , ClientRole.USER));
    }

    public String logIn(LogInRequest request) {
        repositoryBackedUserDetailsService.loadUserByUsername(request.email());
        return clientService.logInUser(request.email(), request.password());
    }
}
