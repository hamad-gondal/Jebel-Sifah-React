import './loader.scss';
import loader from '../../assets/loader.gif'

function Loader() {
    return (
        <img className='loader' src={loader} alt='loader' />
    );
}

export default Loader;
