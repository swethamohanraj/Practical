import React, { useState } from "react";
import "./BookDeletionComponent.css";

function BookDeletionComponent(){
    const [bookId, setBookId] = useState('');

    const handleChange = (event) => {
        setBookId(event.target.value);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        await fetch(`http://localhost:8080/api/v1/library/${bookId}`,{
            method: 'DELETE'
        })
        .then((response) => {
            if(response.status == 500)
            {
                alert("Error ://")
            }
            else{
                alert("Book details deleted")
                window.location.href = '/'
            }
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Book ID:
                <input type="number" name="bookId" value={bookId} onChange={handleChange} required/>
            </label>
            <button type="submit">DELETE</button>
        </form>
    );
};

export default BookDeletionComponent;