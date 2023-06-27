package com.example.Library.Book.app.lib;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/library")
public class LibraryController {

    private final LibraryService libraryService;
    @Autowired
    public LibraryController(LibraryService libraryService) {
        this.libraryService = libraryService;
    }
    @GetMapping("/")
    public List<Library> getBookDetails(){
        return libraryService.displayBookDetails();
    }
    @PostMapping("/")
    public void postBookDetails(@RequestBody Library library){
        libraryService.registerNewBook(library);
    }
    @DeleteMapping(path={"/{id}"})
    public void deleteBookDetails(@PathVariable("id") Long bookId){
        libraryService.removeBook(bookId);
    }
}
