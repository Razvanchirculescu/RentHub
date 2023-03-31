package com.codecool.elproyectegrande.controller;

import com.codecool.elproyectegrande.model.Client;
import com.codecool.elproyectegrande.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ClientController {
    private ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping("/clients")
    public List<Client> getAllClients(){
        return clientService.getAllClients();
    }

    @PatchMapping("/clients")
    public void addClient(@RequestBody Client client){
        clientService.addClient(client);
    }

    @GetMapping("/clients/{id}")
    public Client getClientById(@PathVariable int id){
        return clientService.getClientById(id);
    }

    @PatchMapping("/clients/{name}/{surname}")
    public Client getClientByName(@PathVariable String name, @PathVariable String surname){
        return clientService.getClientByName(name, surname);
    }

    @PatchMapping("/clients/{phoneNo}")
    public Client getClientByPhone(@PathVariable String phoneNo){
        return clientService.getClientByPhone(phoneNo);
    }

}
