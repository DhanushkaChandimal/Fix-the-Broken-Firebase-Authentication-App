import { initializeApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Missing actual API key
  authDomain: "YOUR_AUTH_DOMAIN", // Missing auth domain
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase (MISSING export for `auth`)
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app); // auth variable not exported

export {auth};