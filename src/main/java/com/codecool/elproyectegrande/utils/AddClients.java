package com.codecool.elproyectegrande.utils;

import com.codecool.elproyectegrande.model.Client;

import java.util.List;

public class AddClients {
    public static void addClients(List<Client> clientsList) {
        Client client1 = new Client(1, "Matei","Adrian"
                , "abc@abc.ro", "0726.293.293");
        Client client2 = new Client(1, "Radu","Bogdan"
                , "bcd@bcd.ro", "0773.209.251");
    }
}

