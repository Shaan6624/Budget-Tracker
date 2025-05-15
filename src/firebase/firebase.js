import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAGpFfMznD2dL2TRQHdemGg9T5tKXsVt6Q",
    authDomain: "expense-manager-91725.firebaseapp.com",
    databaseURL: "https://expense-manager-91725-default-rtdb.firebaseio.com",
    projectId: "expense-manager-91725",
    storageBucket: "expense-manager-91725.appspot.com", // Fixed typo in the storageBucket
    messagingSenderId: "760468187494",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };
