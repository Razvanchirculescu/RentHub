package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.model.Client;
//import com.codecool.elproyectegrande.utils.AddClients;
import com.codecool.elproyectegrande.model.ClientRole;
import com.codecool.elproyectegrande.repository.ClientRepository;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientService {

    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }


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

    public Client registerClient(String name, String surname, String email, String phone, String password) throws ClientException{
        // Check if a client with the same email already exists
        if (clientRepository.findByEmailAddress(email) != null) {
            throw new ClientException("A client with this email already exists");
        }
        // Create a new client entity
        Client newClient = new Client();
        newClient.setName(name);
        newClient.setSurname(surname);
        newClient.setEmailAddress(email);
        newClient.setPhoneNumber(phone);
//        newClient.setPassword(passwordEncoder.encode(password1));
        newClient.setPassword(password);
        newClient.setClientRole(ClientRole.USER);

        // Save the new client to the database
        return clientRepository.save(newClient);

    }

//    public void registerClient(String name, String surname, String email, String phone, String password1, String password2) throws ClientException {
//        if (!password1.equals(password2)) {
//            throw new ClientException("parolele nu sunt identice");
//        } else {
//            List<Client> clientList = new ArrayList<>(getAllClients());
//            for (Client client : clientList
//            ) {
//                if (client.getEmailAddress().equals(email)
//                        || client.getPhoneNumber().equals(phone)) {
//                    throw new ClientException("adresa e email sau numarul de telefon  exista deja in baza de date");
//                } else {
//                    Client newClient = new Client();
//                    newClient.setName(name);
//                    newClient.setSurname(surname);
//                    newClient.setEmailAddress(email);
//                    newClient.setPhoneNumber(phone);
////                    newClient.setPassword(passwordEncoder.encode(password1));
//                    newClient.setPassword(password1);
//                    clientRepository.save(newClient);
//                }
//            }
//        }
//    }

    public Client login(String email, String password) throws ClientException {
        // Find the client with the specified email
        Client client = clientRepository.findByEmailAddress(email);

        // Check if the client was found and the password is correct
//        if (client == null || !passwordEncoder.matches(password, client.getPassword())) {
        if (client == null || !client.getPassword().equals(password)) {
            throw new ClientException("Invalid email or password");
        }

        // Return the authenticated client
        return client;
    }


}
