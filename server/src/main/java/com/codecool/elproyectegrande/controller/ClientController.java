package com.codecool.elproyectegrande.controller;

import com.codecool.elproyectegrande.model.Client;
import com.codecool.elproyectegrande.security.ClientSession;
import com.codecool.elproyectegrande.exception.ClientException;
import com.codecool.elproyectegrande.service.ClientService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin(origins = "http://localhost:3000"
        , methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE
        , RequestMethod.POST, RequestMethod.PATCH})
public class ClientController {

    ClientService clientService;

    ClientSession clientSession;

    @Autowired
    public ClientController(ClientService clientService, ClientSession clientSession) {
        this.clientService = clientService;
        this.clientSession = clientSession;
    }

    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    @PatchMapping
    public void addClient(@RequestBody Client client) {
        clientService.addClient(client);
    }

    @GetMapping("/{id}")
    public Client getClientById(@PathVariable int id) {
        return clientService.getClientById(id);
    }

    @PatchMapping("/{name}/{surname}")
    public Client getClientByName(@PathVariable String name, @PathVariable String surname) {
        return clientService.getClientByName(name, surname);
    }

    @PatchMapping("/{phoneNo}")
    public Client getClientByPhone(@PathVariable String phoneNo) {
        return clientService.getClientByPhone(phoneNo);
    }


    @PostMapping("/register")
    public String registerClient(@RequestBody Client client) {
        try {
            clientService.registerClient(
                    client.getName()
                    , client.getSurname()
                    , client.getEmailAddress()
                    , client.getPhoneNumber()
                    , client.getPassword());
            return "redirect:/login-form";
        } catch (ClientException e) {
            System.out.println("message" + e.getMessage());
            return "register-form";
        }
    }


    @PostMapping("/login")
    public String loginClient(@ModelAttribute("client") Client client, BindingResult result, HttpSession session, Model model) {
        if (result.hasErrors()) {
            return "login-form";
        }

        try {
            Client authenticatedClient = clientService.login(client.getEmailAddress(), client.getPassword());
            session.setAttribute("client", authenticatedClient);
            return "redirect:/home";
        } catch (ClientException e) {
            model.addAttribute("message", e.getMessage());
            return "login-form";
        }
    }

    @GetMapping("/home")
    public RedirectView showHomePage(HttpSession session, Model model) {
        Client client = (Client) session.getAttribute("client");
        if (client == null) {
            return new RedirectView("/api/clients/login-form");
        }

        model.addAttribute("client", client);
//        return "home";
        return new RedirectView("/properties");
    }


}
