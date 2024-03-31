package com.example.demo;

import jakarta.persistence.*;

@Entity
@Table(name = "movies")

public class movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "movie_name")
    private String title;

    @Column(name = "genre")
    private String genre;

    @Column(name = "language")
    private String language;

    @Column(name = "ratings")
    private Float ratings;

    @Column(name = "number_of_rated")
    private Long numOfRated;

    public movie(){}

    public movie(Long id, String title, String genre, String language, Float ratings, Long numOfRated){
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.language = language;
        this.ratings = ratings;
        this.numOfRated = numOfRated;
    }

    public Long getId(){ return id; }
    public String getTitle(){ return title; }
    public String getGenre(){ return genre; }
    public String getLanguage(){ return language; }
    public Float getRatings(){ return ratings; }
    public Long getNumOfRated(){ return numOfRated; }

    public void setId(Long id){ this.id = id; }
    public void setTitle(String title){ this.title = title; }
    public void setGenre(String genre){ this.genre = genre; }
    public void setLanguage(String language){ this.language = language; }
    public void setRatings(Float ratings){ this.ratings = ratings; }
    public void setNumOfRated(Long numOfRated){ this.numOfRated = numOfRated; }
}
