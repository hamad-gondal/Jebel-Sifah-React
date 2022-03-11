import './not-found.scss';
import { useLottie } from "lottie-react";
import notFound from "../../assets/404.json";
import { Link } from 'react-router-dom';

function NotFound() {
    const options = {
        animationData: notFound,
        loop: true,
        autoplay: true
    };
    const { View } = useLottie(options);

    return (
        <div className="notFound">
            <div className="animation">{View} </div>
            <p className='lost'>Looks like you are lost :(</p>
            <Link className='link btn' to="/">Return Home</Link>
        </div>

    );
}

export default NotFound;
