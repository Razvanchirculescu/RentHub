package com.codecool.elproyectegrande.service;


import com.codecool.elproyectegrande.model.ClientRole;
import com.codecool.elproyectegrande.registration.token.ConfirmationToken;
import com.codecool.elproyectegrande.repository.ClientRepository;
import com.codecool.elproyectegrande.model.Client;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.codecool.elproyectegrande.exception.ClientException;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class ClientService implements UserDetailsService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final static String USER_NOT_FOUND_MSG =
            "user with email %s not found";

    private final ClientRepository clientRepository;


//    private final JavaMailSender mailSender;
    private final ConfirmationTokenService confirmationTokenService;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return clientRepository.findByEmailAddress(email)
                .orElseThrow(() -> new UsernameNotFoundException(
                        String.format(USER_NOT_FOUND_MSG, email)
                ));
    }

    public /*String*/ void signUpClient(Client client){

        boolean userExists = clientRepository
                .findByEmailAddress(client.getEmailAddress())
                .isPresent();

        if (userExists){
            throw new IllegalStateException("email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder
                .encode(client.getPassword());

        client.setPassword(encodedPassword);

        clientRepository.save(client);

//        String token = UUID.randomUUID().toString();
//        ConfirmationToken confirmationToken = new ConfirmationToken(
//                token,
//                LocalDateTime.now(),
//                LocalDateTime.now().plusMinutes(15),
//                client
//        );

//        confirmationTokenService.saveConfirmationToken(
//                confirmationToken
//        );

//        return token;
    }

    public String logInUser(String email, String password) {
        var user = clientRepository.findByEmailAddress(email);
        if (user.isEmpty() || !bCryptPasswordEncoder.matches(password, user.get().getPassword())) {
            throw new IllegalStateException("email-password combination is not a match");
        }

        String token = UUID.randomUUID().toString();
        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(30),
                user.get()
        );
        confirmationTokenService.saveConfirmationToken(
                confirmationToken
        );

        return token;
    }


//       public ClientService(ClientRepository clientRepository) {
//        this.clientRepository = clientRepository;
//        }


        public List<Client> getAllClients(){
            return clientRepository.findAll();
        }

        public void addClient(Client client){
            clientRepository.save(client);
        }

        public Client getClientByName(String name, String surname){
            return clientRepository.findAll().stream()
                    .filter(client -> (client.getName().equals(name)
                            && client.getSurname().equals(surname)))
                    .findAny()
                    .orElse(null);
        }

        public Client getClientById(int ID){
            return clientRepository.findAll().stream()
                    .filter(client -> client.getId()==ID)
                    .findAny()
                    .orElse(null);
        }

        public Client getClientByPhone(String phoneNo){
            return clientRepository.findAll().stream()
                    .filter(client -> client.getPhoneNumber().equals(phoneNo))
                    .findAny()
                    .orElse(null);
        }

        public void registerClient(String name, String surname, String email, String phone, String password) throws ClientException {
            // Check if a client with the same email already exists
            if (clientRepository.findByEmailAddress(email).isPresent()) {
                throw new ClientException("A client with this email already exists");
            } else if (
                    Objects.equals(email, "")
                            || Objects.equals(name, "")
                            || Objects.equals(surname, "")
                            || Objects.equals(password, "")) {
                throw new ClientException(": missing name, surname, email address or password");
            } else {
                List<Client> clientList = new ArrayList<>(getAllClients());
                if (clientList.size() != 0) {
                    for (Client client : clientList
                    ) {
                        if (client.getEmailAddress().equals(email)
                                || client.getPhoneNumber().equals(phone)
                                || client.getPassword().equals(password)) {
                            throw new ClientException(": email address, phone number or the password  already exists in the database");
                        } else {
                            // Create a new client entity
                            Client newClient = getNewClient(name, surname, email, phone, password);

                            // Save the new client to the database
                            clientRepository.save(newClient);
                            return;
                        }
                    }
                } else {
                    Client newClient = getNewClient(name, surname, email, phone, password);

                    // Save the new client to the database
                    clientRepository.save(newClient);
                }
            }
        }

        private static Client getNewClient(String name, String surname, String email, String phone, String password) {
            // Create a new client entity
            Client newClient = new Client();
            newClient.setName(name);
            newClient.setSurname(surname);
            newClient.setEmailAddress(email);
            newClient.setPhoneNumber(phone);
            newClient.setPassword(password);
            newClient.setClientRole(ClientRole.USER);
            return newClient;
        }


        public Optional<Client> login(String email, String password) throws ClientException {
            // Find the client with the specified email
            Optional<Client> client = clientRepository.findByEmailAddress(email);

            // Check if the client was found and the password is correct
//        if (client == null || !passwordEncoder.matches(password, client.getPassword())) {
            if (client.isEmpty() || !client.get().getPassword().equals(password)) {
                throw new ClientException(": Invalid email or password");
            }

            // Return the authenticated client
            return client;
        }












}
