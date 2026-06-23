// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  // apiKey: "AIzaSyAW1ez5t0ciokGtFXZLjFvQtpaJabEq_9Q",
  // authDomain: "react-firebase-auth-eb73f.firebaseapp.com",
  // projectId: "react-firebase-auth-eb73f",
  // storageBucket: "react-firebase-auth-eb73f.firebasestorage.app",
  // messagingSenderId: "75072945289",
  // appId: "1:75072945289:web:f9838e1cd51f5a40a91a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
