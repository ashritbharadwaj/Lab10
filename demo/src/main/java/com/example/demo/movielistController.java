package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class movielistController {
    
    @Autowired
    private movielistService movielistService;

    @GetMapping("/getAllMovies")
    public ResponseEntity<List<movie>> getAllMovies() {
        return ResponseEntity.ok(movielistService.getAllMovies());
    }

    @GetMapping("/getMovieByid/{id}")
    public ResponseEntity<movie> getMovieById(@PathVariable Long id) {
        return ResponseEntity.ok(movielistService.getMovieById(id));
    }
    
    @PutMapping("/updateRating/{id}")
    public ResponseEntity<movie> updateRating(@PathVariable Long id, @RequestParam String rating) {
        Float f = Float.parseFloat(rating);
        System.out.println("Id of the movie is: "+id);
        return ResponseEntity.ok(movielistService.updateRatings(id, f));
    }

    // @PostMapping("/createMovie")
    // public ResponseEntity<movie> createmovie(@RequestBody movie movie) {
    //     return ResponseEntity.status(HttpStatus.CREATED).body(movielistService.createMovie(movie));
    // }

    // @PutMapping("/updateMovie/{id}")
    // public ResponseEntity<movie> updateMovie(@PathVariable Long id, @RequestBody movie movie) {
    //     return ResponseEntity.ok(movielistService.updateMovie(id, movie));
    // }

    // @DeleteMapping("/deleteMovie/{id}")
    // public ResponseEntity<Void> deleteMovie(@PathVariable Long id) {
    //     movielistService.deleteMovie(id);
    //     return ResponseEntity.noContent().build();
    // }
}
