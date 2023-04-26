package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.model.Client;
//import com.codecool.elproyectegrande.utils.AddClients;
import com.codecool.elproyectegrande.repository.ClientRepository;

import org.springframework.stereotype.Service;

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

}
