import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore, adjust if using other Firebase services
import { getAuth } from "firebase/auth"; // Import getAuth for authentication


const firebaseConfig = {
    apiKey: "AIzaSyBTzjEJNe_DWV6SpMv5E34oOiAfRHZa4q4",
    authDomain: "showtrove-3b378.firebaseapp.com",
    projectId: "showtrove-3b378",
    storageBucket: "showtrove-3b378.appspot.com",
    messagingSenderId: "853028419128",
    appId: "1:853028419128:web:c7f28c1a16496955f118cd",
    measurementId: "G-NRVP7T3HXT"
  };

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Create Firestore instance
const db = getFirestore(firebaseApp);

// Create Auth instance for authentication
const auth = getAuth(firebaseApp);

// Export the instances you want to use in other parts of your app
export { db, auth };