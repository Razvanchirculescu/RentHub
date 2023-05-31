package com.codecool.elproyectegrande;

import lombok.NonNull;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNullApi;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;

@SpringBootApplication
@Configuration
@EnableWebMvc
public class ElProyecteGrandeApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext run = SpringApplication.run(ElProyecteGrandeApplication.class, args);
		Arrays.asList(run.getBeanDefinitionNames()).forEach(System.out::println);
	}



}
