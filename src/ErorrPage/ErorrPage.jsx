import { Link } from "react-router-dom";

const ErorrPage = () => {
    return (
        <div>
            <h2>Oops!!</h2>
            <Link to="/"><button className="btn btn-primary text-3xl font-bold">Back to Home</button></Link>
        </div>
    );
};

export default ErorrPage;