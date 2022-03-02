import './event.scss';

function Event() {
    return (
        <div className='eventDetails'>
            <div className='eventImage'>
                <img src="https://jebel-sifah-admin.netlify.app/_ipx/w_1080,q_75/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fjebel-sifah-live-d2001.appspot.com%2Fo%2F1d4f00bc-5fe1-4450-9dba-0049ee8c28e7%3Falt%3Dmedia%26token%3D21af47b0-f9f1-432b-8a09-908860032892?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fjebel-sifah-live-d2001.appspot.com%2Fo%2F1d4f00bc-5fe1-4450-9dba-0049ee8c28e7%3Falt%3Dmedia%26token%3D21af47b0-f9f1-432b-8a09-908860032892&w=1080&q=75" alt='event-image' />
            </div>
            <div className='eventText'>
                <div className='itemText'>
                    <p className='detailTitle'> <strong>Title:</strong></p>
                    <p className='detailText'>Kids Activity</p>
                </div>
                <div className='itemText'>
                    <p className='detailTitle'> <strong>Location:</strong></p>
                    <p className='detailText'>Jebel Sifah</p>
                </div>
                <div className='itemText'>
                    <p className='detailTitle'> <strong>Venue:</strong></p>
                    <p className='detailText'>Dunes Beach</p>
                </div>
                <div className='itemText'>
                    <p className='detailTitle'> <strong>Phone:</strong></p>
                    <p className='detailText'>800 45555</p>
                </div>
                <div className='itemText'>
                    <p className='detailTitle'> <strong>Date:</strong></p>
                    <p className='detailText'>Nov 26, 2021</p>
                </div>
                <div className='itemText'>
                    <p className='detailTitle'> <strong>Start Time:</strong></p>
                    <p className='detailText'>Beach Fun</p>
                </div>
                <div className='itemText'>
                    <p className='detailTitle'> <strong>End Time:</strong></p>
                    <p className='detailText'>Beach Fun</p>
                </div>
                <div className='itemText'>
                    <p className='detailTitle'> <strong>Description:</strong></p>
                </div>
                <p className='descriptionText'>November may be the best time of the year to get your kids involved in beach sports, but try not to forget the sunscreen, the hats and some water! Our beach soccer games are accessible for kids of any age. Come and join as at Dunes Beach for a fun filled beach soccer activity. JEBEL SIFAH. Inspiration awaits.</p>
            </div>
            <div className='actionButtons'>
                <button className='btn'>Edit</button>
                <button className='btn'>Delete</button>
            </div>
        </div>
    );
}

export default Event;
