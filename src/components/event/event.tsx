import './event.scss';

function Event(eventList: any) {

    return (
        <>
            {eventList.eventList.map((item: any) => (
                <div className='eventDetails' key={item.id}>
                    <div className='eventImage'>
                        <img src={item?.image} alt='event' />
                    </div>
                    <div className='eventText'>
                        <div className='itemText'>
                            <p className='detailTitle'> <strong>Title:</strong></p>
                            <p className='detailText'>{item?.name}</p>
                        </div>
                        <div className='itemText'>
                            <p className='detailTitle'> <strong>Location:</strong></p>
                            <p className='detailText'>{item?.location?.location}</p>
                        </div>
                        <div className='itemText'>
                            <p className='detailTitle'> <strong>Venue:</strong></p>
                            <p className='detailText'> {item?.location?.venue}</p>
                        </div>
                        <div className='itemText'>
                            <p className='detailTitle'> <strong>Phone:</strong></p>
                            <p className='detailText'>{item?.phone}</p>
                        </div>
                        <div className='itemText'>
                            <p className='detailTitle'> <strong>Date:</strong></p>
                            <p className='detailText'>{item?.eventStart?.date}</p>
                        </div>
                        <div className='itemText'>
                            <p className='detailTitle'> <strong>Start Time:</strong></p>
                            <p className='detailText'>{item?.eventStart?.time}</p>
                        </div>
                        <div className='itemText'>
                            <p className='detailTitle'> <strong>End Time:</strong></p>
                            <p className='detailText'>{item?.eventEnd?.time}</p>
                        </div>
                        <div className='itemText'>
                            <p className='detailTitle'> <strong>Description:</strong></p>
                        </div>
                        <p className='descriptionText'>{item?.description}</p>
                    </div>
                    <div className='actionButtons'>
                        <button className='btn'>Edit</button>
                        <button className='btn'>Delete</button>
                    </div>
                </div>
            ))
            }
        </>
    );
}

export default Event;
