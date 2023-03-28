package com.codecool.elproyectegrande.model;

import java.util.ArrayList;

public class Homeowner {
    private String name;
    private ArrayList<Job> jobsPosted;

    public Homeowner(String name) {
        this.name = name;
        jobsPosted = new ArrayList<>();
    }

    public void addJob(Job job) {
        jobsPosted.add(job);
    }
}
