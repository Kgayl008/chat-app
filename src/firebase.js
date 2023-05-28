import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9n0UXEBMY6ezaI_ASC5SKfYBrqLYBAT4",
    authDomain: "chat-app-db425.firebaseapp.com",
    projectId: "chat-app-db425",
    storageBucket: "chat-app-db425.appspot.com",
    messagingSenderId: "357404455993",
    appId: "1:357404455993:web:1c4b6757099ac520c309e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()