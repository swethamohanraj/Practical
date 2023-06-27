package com.example.Library.Book.app.lib;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LibraryRepository extends JpaRepository<Library, Long> {
    @Query("Select lib from Library lib where lib.bookName = ?1")
    Optional<Library> findBookByName(String bookName);
}
