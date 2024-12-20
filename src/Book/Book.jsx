import { key } from "localforage";
import { FaRegStar } from "react-icons/fa6";

const Book = ({book}) => {
    const {bookId, bookName, author, image, review,totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="bg-white p-3 rounded-lg border mx-4" >
            <div className="bg-red-100 flex justify-center py-6 rounded-lg">
            <img src={image} className="w-36 h-40" alt="" />
            </div>

            <div className="flex gap-8 text-green-600 mt-2 p-2">
                <p className="flex gap-3">{tags.map((tag,idx )=><li className="list-none text-start " key={idx} tag={tag}><a className="mb-2 bg-green-50 px-3 rounded-full " href="">{tag}</a> </li>)}</p>
            </div>

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
    );
};

export default Book;