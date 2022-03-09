import './not-found.scss';
import notFound from '../../assets/404.svg';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="notFound">
            <img src={notFound} alt="404" />
            <p>Looks like you are lost :(</p>
            <Link className='link btn' to="/">Return Home</Link>
        </div>

    );
}

export default NotFound;
