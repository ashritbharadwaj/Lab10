package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class movielistService {

    @Autowired
    private movielistRepository movielistRepository;

    public List<movie> getAllMovies() {
        return movielistRepository.findAll();
    }

    public movie getMovieById(Long id) {
        return movielistRepository.findById(id).orElse(null);
    }

    public movie updateRatings(Long id, Float rating) {
        movie movieToUpdate = movielistRepository.findById(id).orElse(null);
        if (movieToUpdate != null) {
            movieToUpdate.setRatings((movieToUpdate.getRatings() * movieToUpdate.getNumOfRated() + rating)
                    / (movieToUpdate.getNumOfRated() + 1L));
            movieToUpdate.setNumOfRated(movieToUpdate.getNumOfRated() + 1L);
            return movielistRepository.save(movieToUpdate);
        } else {
            return null;
        }
    }

    // public movie createMovie(movie movie) {
    // // convert ingredients to text
    // return movielistRepository.save(movie);
    // }

    // public movie updateMovie(Long id, movie movie) {
    // movie.setId(id);
    // return movielistRepository.save(movie);
    // }

    // public void deleteMovie(Long id) {
    // movielistRepository.deleteById(id);
    // }
}