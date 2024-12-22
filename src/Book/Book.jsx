import { key } from "localforage";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Tags from "./Tags";

const Book = ({book}) => {
    const {bookId, bookName, author, image, review,totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    const handleBookDetails = () =>{

    }
    return (
       <Link to={`/book/${bookId}`}>
        <div  className="bg-white p-3 rounded-lg border mx-4 mb-10" >
            <div className="bg-red-100 flex justify-center py-6 rounded-lg">
            <img src={image} className="w-36 h-40" alt="" />
            </div>

            
                <div className="flex gap-3 text-green-600 mt-2 p-2">{tags.map((tag,idx )=><Tags key={idx} tag={tag}></Tags>)}</div>
            

            <h1 className="text-black text-3xl font-semibold text-start pl-2">{bookName}</h1>
            <p className="text-start text-black font-semibold pl-2">{author}</p>
            <hr className="border-dotted my-3"/>


            <div className="flex justify-between px-2">
            <p  className="text-black text-start pl-2">{category}</p>
            <div className="flex gap-2">
            <p className="text-black ">{rating}</p>
            <FaRegStar  className="text-2xl text-black"/>
            </div>
            </div>

        </div>
       </Link>
    );
};

export default Book;