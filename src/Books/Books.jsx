import { use, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('book.json')
        .then(res =>res.json())
        .then(data =>setBooks(data));
    },[])
    return (
        <div>
            <h1 className="text-black text-4xl font-bold my-3">Books</h1>

        <div className="grid grid-cols-3 gap-6">
            {
                books.map(book =><Book key={book.id} book={book}></Book>)
            }
        </div>
        </div>
    );
};

export default Books;