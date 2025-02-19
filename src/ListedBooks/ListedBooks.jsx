import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../utility/utility";
import ReadBook from "./ReadBook";
import HeaderOfListedBook from "./HeaderOfListedBook";

const ListedBooks = () => {
    const books = useLoaderData();

    const [bookRead , setBookRead] = useState([]);

    useEffect(() =>{
        const storedBookId = getStoredReadBook();
        if(storedBookId.length>0){
            // const reedBook = books.filter(book => storedBookId.includes(book.bookId));

            const readBook = [];
            for(const bookId of storedBookId) {
                const book = books.find((book) => book.bookId === bookId);
                if(book){
                    readBook.push(book)
                }
            }
            setBookRead(readBook);
            // console.log(storedBookId,books,readBook);
        }
    },[])
    return (
        <div>
            <HeaderOfListedBook></HeaderOfListedBook>
            <ul className="mt-2">
                {
                    bookRead.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </ul>
        </div>
    );
};

export default ListedBooks;