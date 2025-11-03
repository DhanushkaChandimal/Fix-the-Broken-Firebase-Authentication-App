import { initializeApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9C2164g9EbHJuMNtCoUjjO2inKDXsFrk",
  authDomain: "disco-demo-747dd.firebaseapp.com",
  projectId: "disco-demo-747dd",
  storageBucket: "disco-demo-747dd.firebasestorage.app",
  messagingSenderId: "903844435135",
  appId: "1:903844435135:web:6f54f3fa0833663a20a20a"
};

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export {auth};