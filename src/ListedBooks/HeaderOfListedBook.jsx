import { NavLink } from "react-router-dom";

const HeaderOfListedBook = () => {
    const link = <>
    <li><NavLink to='/listedBooks' className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold border-t-2 border-l-2 border-r-2  px-2 " : "text-gray-500"
        }>Read Books</NavLink></li>
    <li><NavLink to='/wishlist' className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold  border-t-2 border-l-2 border-r-2 px-2 " : "text-gray-500"
        }>Wishlist Books</NavLink></li>
    </>
    return (
        <div>
            <div className="flex list-none gap-12 2 border-b-2 ">
                {link}
            </div>
        </div>
    );
};

export default HeaderOfListedBook;