package com.codecool.elproyectegrande.config;

//import io.github.cdimascio.dotenv.Dotenv;
import com.codecool.elproyectegrande.repository.ClientRepository;
import com.codecool.elproyectegrande.service.RepositoryBackedUserDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.config.annotation.SecurityBuilder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.SecurityBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import java.util.Arrays;
import java.util.List;
import java.util.Properties;

@Configuration(enforceUniqueMethods = false)
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig /*extends WebSecurityConfigurerAdapter*/ implements WebSecurityConfigurer{


    @Autowired
    private ClientRepository clientRepository;

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors().and()
                .csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers(
//                        "/api/clients/**",
                        "/properties/**"
                        , "api/accounts/login"
                        , "api/accounts/register")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .and().exceptionHandling().disable();
        return http.build();
    }

    @Override
    public void configure(SecurityBuilder builder) throws Exception {


    }

    @Override
    public void init(SecurityBuilder builder) throws Exception {

    }

//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(List.of("http://localhost:3000")); // Replace with your React client URL
//        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
//        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//
//        return source;
//    }


//    @Override
//    protected void configure(AuthenticationManagerBuilder authenticationManagerBuilder)
//            throws Exception {
//        authenticationManagerBuilder
//                .userDetailsService(new RepositoryBackedUserDetailsService(clientRepository))
//                .passwordEncoder(NoOpPasswordEncoder.getInstance());
//
//    }


}
