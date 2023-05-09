package com.codecool.elproyectegrande.service;

import com.codecool.elproyectegrande.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private ReviewRepository reviewRepository;


}
