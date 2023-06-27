package com.example.Library.Book.app.lib;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Optional;

@Component
public class LibraryService {
    private final LibraryRepository libraryRepository;
    @Autowired
    public LibraryService(LibraryRepository libraryRepository) {
        this.libraryRepository = libraryRepository;
    }
    public List<Library> displayBookDetails() {
        return libraryRepository.findAll();
    }

    public void registerNewBook(Library library) {
        Optional<Library> bookOptional = libraryRepository.findBookByName(library.getBookName());

        if(bookOptional.isPresent()){
            throw new IllegalStateException("Book already present");
        }
        libraryRepository.save(library);
    }

    public void removeBook(Long bookId) {
        boolean bookExists = libraryRepository.existsById(bookId);
        if(!bookExists){
            throw new IllegalStateException("Book doesn't exist");
        }
        libraryRepository.deleteById(bookId);
    }
}
