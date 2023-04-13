package com.codecool.elproyectegrande.utils;

import com.codecool.elproyectegrande.model.Client;

import java.util.List;

public class AddClients {
    public static void addClients(List<Client> clientsList) {
        Client client1 = new Client(1, "Matei","Adrian"
                , "abc@abc.ro", "0726.293.293");
        clientsList.add(client1);


        Client client2 = new Client(2, "Radu","Bogdan"
                , "bcd@bcd.ro", "0773.209.251");
        clientsList.add(client2);

        Client client3 = new Client(3, "Andrei","Gogu"
                , "cde@cde.ro", "0766.201.243");
        clientsList.add(client3);

        Client client4 = new Client(4, "Alexandra","Matei"
                , "dee@dee.ro", "0733.201.333");
        clientsList.add(client4);

    }
}

