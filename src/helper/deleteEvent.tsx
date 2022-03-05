import { doc, deleteDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import initFirebase from "../helper/firebase";

initFirebase();
const db = getFirestore();

export const deleteEvent = async (eventId: string, eventType: string) => {
    try {
        await deleteDoc(doc(db, eventType, eventId));
        const storage = getStorage();
        // Create a reference to the file to delete
        const desertRef = ref(storage, eventId);
        // Delete the file
        deleteObject(desertRef).then(() => {
            window.location.reload();
            // File deleted successfully
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error);
        });
        console.log("Event Deleted");

    } catch (error) {
        console.error(error);
    }
};
