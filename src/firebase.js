import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFeQ_OtEJM6SauZ7cZJkrzADXwMVtWAIw",
  authDomain: "chat-f192b.firebaseapp.com",
  projectId: "chat-f192b",
  storageBucket: "chat-f192b.appspot.com",
  messagingSenderId: "1046493065032",
  appId: "1:1046493065032:web:beb4f242d1241dfbfc8d7d",
  measurementId: "G-NHD0JS8D04"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(); 
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);
