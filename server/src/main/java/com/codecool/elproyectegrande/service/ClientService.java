package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.model.Client;
//import com.codecool.elproyectegrande.utils.AddClients;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientService {

    private List<Client> clients;

    public ClientService() {
        this.clients = new ArrayList<>();
//        AddClients.addClients(clients);
    }

    public void addClient(Client client){
        this.clients.add(client);
    }

    public List<Client> getAllClients(){
        return clients;
    }

    public Client getClientByName(String name, String surname){
        return clients.stream()
                .filter(client -> (client.getName().equals(name)
                        && client.getSurname().equals(surname)))
                .findAny()
                .orElse(null);
    }

    public Client getClientById(int ID){
        return clients.stream()
                .filter(client -> client.getId()==ID)
                .findAny()
                .orElse(null);
    }

    public Client getClientByPhone(String phoneNo){
        return clients.stream()
                .filter(client -> client.getPhoneNumber().equals(phoneNo))
                .findAny()
                .orElse(null);
    }

}
