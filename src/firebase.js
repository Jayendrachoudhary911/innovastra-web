import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB81KrtSSo4rVYXwZDtYZ_a5YbnaQRn3W8",
    authDomain: "innovastra-3b3bc.firebaseapp.com",
    projectId: "innovastra-3b3bc",
    storageBucket: "innovastra-3b3bc.firebasestorage.app",
    messagingSenderId: "515370898877",
    appId: "1:515370898877:web:f9d5273dc823e10a792ed4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };