import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveReadBook } from "../utility/utility";



const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookIdInt);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

    const hanldeListedBooks = () =>{
      const readBook =saveReadBook(bookIdInt)
      if(readBook){
        toast.error('book already added');
      }else{
        toast.success('book added successfully');
      }
    }


  return (
    <div className="grid gap-2 md:grid-cols-2">
      <div>
        <img className="w-full rounded-lg h- " src={image} alt="" />
      </div>
      <div className="text-black">
        <h1 className="text-3xl text-start font-semibold">{bookName}</h1>
        <h3 className="text-start font-semibold">BY: {author}</h3>
        <hr />
        <p className="text-start">{category}</p>

        <hr className="my-4" />

        <p className="text-start">
          <span className="font-bold">Review:</span>
          {review}
        </p>

        <p className="text-start">
          <span className="font-bold mr-8">Tag</span>
          {tags.map((tag, idx) => (
            <a
              className="text-green-700 mr-2 rounded-full px-3 bg-green-50"
              key={idx}
            >
              #{tag}
            </a>
          ))}
        </p>

        <hr className="my-4" />

        <div className="flex text-start gap-6 ">
          <div className="font-bold">
            <p>Name of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publisher:</p>
            <p>Rating:</p>
          </div>
          <div>
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>

        <div className="flex justify-start gap-6 mt-6">
            <button onClick={hanldeListedBooks} className="btn btn-info">Read</button>
            <button className="btn btn-warning">Wishlist</button>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default BookDetails;
