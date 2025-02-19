import { key } from "localforage";
import { CiLocationOn } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ReadBook = ({ book }) => {
  const {
    bookId,
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
  return (
    <div className="grid md:grid-cols-3 bg-red-100 gap-4 mb-4  rounded-lg ">
      <div>
        <img className="h-44 w-full rounded-lg" src={image} alt="" />
      </div>
      <div className="md:col-span-2  p-2">
        <h1 className="text-start text-black text-3xl font-serif">
          {bookName}
        </h1>
        <h1 className="text-start text-black">By: {author}</h1>

        <div>
          <p className="text-start">
            <span className="mr-8 text-black font-bold ">Tag:</span>
            {tags.map((tag, idx) => (
              <a className="text-green-600 mr-3" key={idx}>
                # {tag}
              </a>
            ))}
          </p>

          <div>
            <p className=" flex">
              <CiLocationOn className="text-2xl text-black " />
              <span className="text-black">
                Year of Publishing: {yearOfPublishing}
              </span>
            </p>
          </div>
        </div>
        <div className="flex  gap-6 text-black">
          <div className="flex">
            <p><IoMdPerson className="text-2xl"/></p>
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex">
            <p><MdOutlineContactPage  className="text-2xl"/></p>
            <p> Page: {totalPages}</p>
          </div>
        </div>
        <hr />
        <div className="flex">
            <p className="bg-blue-100 px-2 text-blue-600 rounded-full">Category: {category}</p>
            <p className="bg-red-200 px-2 text-red-600 rounded-full">Rating: {rating}</p>
            <Link to={`/book/${bookId}`}><button className="bg-green-600 px-2 text-white rounded-full">Veiw Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
