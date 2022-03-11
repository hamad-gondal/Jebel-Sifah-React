import './not-found.scss';
import Lottie from "lottie-react";
import notFound from "../../assets/404.json";
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="notFound">
            <Lottie animationData={notFound} />
            {/* <p>Looks like you are lost :(</p> */}
            <Link className='link btn' to="/">Return Home</Link>
        </div>

    );
}

export default NotFound;
