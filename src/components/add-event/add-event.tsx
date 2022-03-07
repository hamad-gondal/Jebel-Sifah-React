import { useEffect, useMemo } from 'react';
import { saveEvent, updateEvent } from '../../helper/saveEvent';
import './add-event.scss';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { getSingleEvent } from '../../helper/getEvents';
import { setFormValue } from '../../helper/setFormValues';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddEvent() {
    let query = useQuery();
    let id: string = '';
    let type: string = '';
    const notify = (eventText: string) => toast.success(eventText, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const saveEventDetails = async (event: any) => {
        if (id) {
            await updateEvent(event);
            notify('Event updated successfully');
        }
        else {
            await saveEvent(event);
            notify('Event added successfully');
        }
    };

    const editEvents = async () => {
        const eventDetails: any = await getSingleEvent(type as string, id as string);
        setFormValue(eventDetails);
    }

    function useQuery() {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }

    useEffect(() => {
        if (query.get("id")) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            id = query.get("id") as string;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            type = query.get("type") as string;
            editEvents();
        }
    }, []);

    return (
        <div className="wrapper">
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="eventDetails">
                <form id="eventDetailsForm" onSubmit={saveEventDetails}>
                    <h1 className='pageTitle'>Event Details</h1>
                    <div className="sectionDetail">
                        <label className='fieldTitle'>Title: </label>
                        <input
                            name="name"
                            className='inputField'
                            type="text"
                        >
                        </input>
                    </div>
                    <div className="sectionDetail">
                        <label className='fieldTitle'>Location: </label>
                        <select className="inputField dateTime" name="location" >
                            <option value="Jebel Sifah">Jebel Sifah</option>
                            <option value="Havana Salalah">Havana Salalah</option>
                        </select>
                    </div>
                    <div className="sectionDetail">
                        <label className='fieldTitle'>Venue: </label>
                        <input
                            name="venue"
                            className='inputField'
                            type="text">
                        </input>
                    </div>
                    <div className="sectionDetail">
                        <label className='fieldTitle'>Start Time: </label>
                        <input
                            name="startTime"
                            className='inputField dateTime'
                            type="time">
                        </input>
                    </div>
                    <div className="sectionDetail">
                        <label className='fieldTitle'>End Time: </label>
                        <input
                            name="endTime"
                            className='inputField dateTime'
                            type="time">
                        </input>
                    </div>
                    <div className="sectionDetail">
                        <label className='fieldTitle'>Date: </label>
                        <input
                            name="startDate"
                            className='inputField dateTime'
                            type="date">
                        </input>
                    </div>
                    <div className="sectionDetail">
                        <label className='fieldTitle'>Phone: </label>
                        <input
                            name="phone"
                            className='inputField'
                            type="text">
                        </input>
                    </div>
                    <div className="sectionDetail">
                        <label className='fieldTitle'>Booking URL: </label>
                        <input
                            name="booking"
                            className='inputField'
                            type="text">
                        </input>
                    </div>
                    <div className="sectionDetail">
                        <label className='fieldTitle'>Description: </label>
                        <textarea className='inputField descriptionField' name="description" id="description" rows={5} cols={60} >
                        </textarea>
                    </div>
                    <div className="sectionDetail">
                        <label className='fieldTitle'>Image: </label>
                        <input
                            name="imageToUpload"
                            id="imageToUpload"
                            className='fileUpload'
                            type="file">
                        </input>
                    </div>
                    <button className='btn' type="submit" value="Submit">Save</button>
                </form>
            </div>
        </div>

    );
}

export default AddEvent;

