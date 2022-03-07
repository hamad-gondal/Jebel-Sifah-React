import './loader.scss';
import loader from '../../assets/loader.gif'

function Loader() {
    return (
        <div className="loader">
            <img src={loader} alt='loader' />
        </div>

    );
}

export default Loader;
