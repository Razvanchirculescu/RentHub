package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.model.Client;
import com.codecool.elproyectegrande.model.ClientRole;
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
            if (client.getClientRole().equals(ClientRole.ADMIN)) {
                roles.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
            }
            else if(client.getClientRole().equals(ClientRole.DEVELOPER)){
                roles.add(new SimpleGrantedAuthority("ROLE_DEVELOPER"));
            }
            else if (client.getClientRole().equals(ClientRole.USER)) {
                roles.add(new SimpleGrantedAuthority("ROLE_USER"));
            }
            else {throw new UsernameNotFoundException("not a valid user role");
            }
        }
        assert client != null;
        System.out.println("User auth: "+client.getName()+"  "+client.getPassword()+"   "+roles);
        return new User(client.getName(), client.getPassword(), roles);
    }
}