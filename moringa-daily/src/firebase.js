// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBdYLJDhfqqjJLhWEMW3KFA4mVf5y4GjGA",
  authDomain: "moringadailydev.firebaseapp.com",
  projectId: "moringadailydev",
  storageBucket: "moringadailydev.appspot.com",
  messagingSenderId: "1031586072942",
  appId: "1:1031586072942:web:f5b051dec6c71f56bfd97f",
  measurementId: "G-BEZDE9PGMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;