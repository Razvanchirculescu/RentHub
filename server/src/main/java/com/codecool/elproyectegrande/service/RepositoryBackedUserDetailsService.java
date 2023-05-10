package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.model.Client;
import com.codecool.elproyectegrande.repository.ClientRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RepositoryBackedUserDetailsService
        implements UserDetailsService {

    private final ClientRepository clientRepository;

    public RepositoryBackedUserDetailsService(
            ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String emailAddress)
            throws UsernameNotFoundException {
        System.out.println("emailAddress: "+emailAddress);
        Client client = clientRepository.findAll()
                .stream().filter(client1 -> client1.getEmailAddress().equals(emailAddress))
                .findFirst()
                .orElseThrow(() ->new UsernameNotFoundException(emailAddress));

        List<SimpleGrantedAuthority> roles = new ArrayList<>();
        if (client!=null) {
            if (emailAddress.equals("Admin")) {
                roles.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
            }
            if(emailAddress.equals("DEV")){
                roles.add(new SimpleGrantedAuthority("ROLE_DEVELOPER"));
            }
        } else {
            roles.add(new SimpleGrantedAuthority("ROLE_USER"));
        }
        assert client != null;
        return new User(client.getName(), client.getPassword(), roles);
    }
}