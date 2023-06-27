import React, { useState } from "react";
import "./BookRegistrationComponent.css";

function BookRegistrationComponent() {
    const [book, setBook] = useState({
        bookName: '',
        bookAuthor: '',
        bookEdition: '',
        bookQuantity: ''
    });

    const handleChange = (event) => {
        const {name,value} = event.target;
        setBook({ ...book, [name]: value});
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        await fetch("http://localhost:8080/api/v1/library/",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then((response) => {
            if(response.status == 500)
            {
                alert("Error ://")
            }
            else{
                alert('Book details successfully added')
                window.location.href = '/'
            }
        })
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Book Name:
                <input type="text" name="bookName" value={book.bookName} onChange={handleChange} required/>
            </label>
            <label>
                Book Author:
                <input type="text" name="bookAuthor" value={book.bookAuthor} onChange={handleChange} required/>
            </label>
            <label>
                Edition:
                <input type="number" name="bookEdition" value={book.bookEdition} onChange={handleChange} required/>
            </label>
            <label>
                Quantity:
                <input type="number" name="bookQuantity" value={book.bookQuantity} onChange={handleChange} required/>
            </label>
            <button type="submit">SUBMIT</button>
        </form>
    );
};

export default BookRegistrationComponent;