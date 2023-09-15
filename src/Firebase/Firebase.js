// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCHVU38FyDt9MwwxQiSoICNmIFTXDUGX80",
  authDomain: "pomodro-timer-app-259f8.firebaseapp.com",
  projectId: "pomodro-timer-app-259f8",
  storageBucket: "pomodro-timer-app-259f8.appspot.com",
  messagingSenderId: "40720734726",
  appId: "1:40720734726:web:de57c6c57397b7fdaf0187",
  measurementId: "G-985167761S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider()



export const signInWithGoogle = (setValue) => {
    signInWithPopup(auth,provider).then((result) => {
       setValue(result.user.email)
       localStorage.setItem("email",result.user.email)
    }).catch((err) => {
        console.log(err);
    })
};


