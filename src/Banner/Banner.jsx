import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="grid md:grid-cols-2 mb-12 bg-slate-100 py-20 rounded-lg ">
            <div className="text-black">
                <div className="ml-10">
                <h1 className="text-4xl font-bold text-start mb-12">Books to freshen up your bookshelf</h1>
                <Link to='/listedBooks'><button className="btn btn-success flex">View The List..</button></Link>
                </div>
            </div>
            <div className="flex justify-center  items-center">
            <img src="/public/Images/Books/banner3.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;