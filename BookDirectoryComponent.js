import React, { useEffect, useState } from "react";
import "./BookDirectoryComponent.css";

function BookDirectoryComponent(){
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/library/');
            const data = await response.json();
            setBooks(data);
        }
        catch(error){
            console.log("Error: ",error);
        }
    };

    return(
        <div className="book-list">
            {books.map((book) => (
                <div className="book-card" key={book.bookID}>
                    <p>Book ID: {book.bookId}</p>
                    <p>Book Name: {book.bookName}</p>
                    <p>Book Author: {book.bookAuthor}</p>
                    <p>Edition: {book.bookEdition}</p>
                    <p>Quantity: {book.bookQuantity}</p>
                </div>
            ))}
        </div>
    );
};

export default BookDirectoryComponent;