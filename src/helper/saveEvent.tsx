import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import moment from 'moment';
import ImageTools from '../helper/ImageTools';
import firebase from 'firebase/compat/app';

export const saveEvent = async (event: any) => {

    event.preventDefault();
    const db = getFirestore();
    const file = event.target.imageToUpload.files[0];
    if (!!file) {
        const imageTools = new ImageTools();
        const reSizedImage = imageTools.resize(file, { width: 768, height: 432 });
        const docId = uuidv4();
        const storage = getStorage();
        const storageRef = ref(storage, docId);
        const eventLocation = event.target.location.value === "Jebel Sifah" ? "jebelSifah" : "havanaSalalah";
        uploadBytes(storageRef, await reSizedImage).then((snapshot) => {
            console.log("Image Uploaded Successfully!");
            getDownloadURL(ref(storage, docId))
                .then((url) => {

                    const eventDetails = {
                        name: event.target.name.value,
                        location: {
                            location: event.target.location.value,
                            venue: event.target.venue.value,
                            latitude:
                                event.target.location.value === "Jebel Sifah"
                                    ? "23.4117"
                                    : "17.0334",
                            longitude:
                                event.target.location.value === "Jebel Sifah"
                                    ? "58.7875"
                                    : "54.3003",
                        },
                        eventStart: {
                            time: event.target.startTime.value,
                            date: moment(event.target.startDate.value).format('ll'),
                        },
                        eventEnd: {
                            time: event.target.endTime.value,
                            date: '',
                        },
                        phone: event.target.phone.value,
                        description: event.target.description.value,
                        image: url,
                        id: docId,
                        booking: event.target.booking.value,
                    };
                    setDoc(doc(db, eventLocation, docId), eventDetails);
                    console.log("Data Saved Successfully");
                    event.target.name.value = "";
                    event.target.venue.value = "";
                    event.target.startDate.value = "";
                    event.target.startTime.value = "";
                    event.target.endTime.value = "";
                    event.target.phone.value = "";
                    event.target.description.value = "";
                    event.target.imageToUpload.value = "";
                    event.target.booking.value = "";
                })
                .catch((error) => {
                    console.log("Error in uploading image: ", error);
                });
        });
    }
};

export const updateEvent = async (event: any) => {
    event.preventDefault();
    const firestore = firebase.firestore();
    const file = event.target.imageToUpload?.files[0];
    const imageUrl = event.target.imageToUpload.dataset.src;
    const eventId = event.target.imageToUpload.dataset.id;
    const eventLocation = event.target.location.value === "Jebel Sifah" ? "jebelSifah" : "havanaSalalah";

    if (!!file) {
        const imageTools = new ImageTools();
        const reSizedImage = imageTools.resize(file, { width: 768, height: 432 });
        const docId = uuidv4();
        const storage = getStorage();
        const storageRef = ref(storage, docId);
        uploadBytes(storageRef, await reSizedImage).then((snapshot) => {
            console.log("Image Uploaded Successfully!");
            getDownloadURL(ref(storage, docId))
                .then((url) => {

                    const eventDetails = {
                        name: event.target.name.value,
                        location: {
                            location: event.target.location.value,
                            venue: event.target.venue.value,
                            latitude:
                                event.target.location.value === "Jebel Sifah"
                                    ? "23.4117"
                                    : "17.0334",
                            longitude:
                                event.target.location.value === "Jebel Sifah"
                                    ? "58.7875"
                                    : "54.3003",
                        },
                        eventStart: {
                            time: event.target.startTime.value,
                            date: moment(event.target.startDate.value).format('ll'),
                        },
                        eventEnd: {
                            time: event.target.endTime.value,
                            date: '',
                        },
                        phone: event.target.phone.value,
                        description: event.target.description.value,
                        image: url,
                        id: eventId,
                        booking: event.target.booking.value,
                    };
                    firestore.collection(eventLocation)
                        .doc(eventId)
                        .update(eventDetails);
                    console.log("Data Saved Successfully");
                    event.target.name.value = "";
                    event.target.venue.value = "";
                    event.target.startDate.value = "";
                    event.target.startTime.value = "";
                    event.target.endTime.value = "";
                    event.target.phone.value = "";
                    event.target.description.value = "";
                    event.target.imageToUpload.value = "";
                    event.target.booking.value = "";
                })
                .catch((error) => {
                    console.log("Error in uploading image: ", error);
                });
        });
    }

    if (!file) {
        firestore.collection(eventLocation).doc(eventId)
            .update({
                name: event.target.name.value,
                location: {
                    location: event.target.location.value,
                    venue: event.target.venue.value,
                    latitude:
                        event.target.location.value === "Jebel Sifah"
                            ? "23.4117"
                            : "17.0334",
                    longitude:
                        event.target.location.value === "Jebel Sifah"
                            ? "58.7875"
                            : "54.3003",
                },
                eventStart: {
                    time: event.target.startTime.value,
                    date: moment(event.target.startDate.value).format('ll'),
                },
                eventEnd: {
                    time: event.target.endTime.value,
                    date: '',
                },
                phone: event.target.phone.value,
                description: event.target.description.value,
                image: imageUrl,
                id: eventId,
                booking: event.target.booking.value,
            });
        console.log("Data Updated Successfully");
        event.target.name.value = "";
        event.target.venue.value = "";
        event.target.startDate.value = "";
        event.target.startTime.value = "";
        event.target.endTime.value = "";
        event.target.phone.value = "";
        event.target.description.value = "";
        event.target.imageToUpload.value = "";
        event.target.booking.value = "";
    }
};
