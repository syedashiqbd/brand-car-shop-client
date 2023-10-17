import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            this is wrong way, <Link to='/'>Go back home</Link>
        </div>
    );
};

export default ErrorPage;