import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDNJ8URfk7UQR69f6leW7Ue0NOTxD6Vw04",
    authDomain: "facebook-d3bba.firebaseapp.com",
    projectId: "facebook-d3bba",
    storageBucket: "facebook-d3bba.appspot.com",
    messagingSenderId: "268708339651",
    appId: "1:268708339651:web:41488389a168dba3d82776"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
