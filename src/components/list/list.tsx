import './list.scss';
import Event from '../event/event'

function List() {
    return (
        <div>
            <h1 className="title">Jebel Sifah Events</h1>
            <div className='content'>
                <Event />
            </div>
        </div>
    );
}

export default List;
