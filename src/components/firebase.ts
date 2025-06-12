// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENT_ID
};
/*

const firebaseConfig = {
  apiKey: "AIzaSyBxiQ1Tmsuq_xc0zbtZ7TaF_BtOaKMFf6Y",
  authDomain: "varius-auth-flame.firebaseapp.com",
  projectId: "varius-auth-flame",
  storageBucket: "varius-auth-flame.firebasestorage.app",
  messagingSenderId: "837723436527",
  appId: "1:837723436527:web:b5de705c813fd20652f21a",
  measurementId: "G-KSF7G866X9"
};

*/
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };