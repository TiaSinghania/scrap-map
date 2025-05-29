// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD88ZSovt0b9DWAZI9shAk4U6bIfifzt3g",
  authDomain: "scrapmap-c659d.firebaseapp.com",
  projectId: "scrapmap-c659d",
  storageBucket: "scrapmap-c659d.firebasestorage.app",
  messagingSenderId: "1059582597758",
  appId: "1:1059582597758:web:cd06316a4515e94f26162f",
  measurementId: "G-VPT1SHQXJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});
export const auth = getAuth();
export const db = getFirestore(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
