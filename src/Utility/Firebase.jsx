import  firebase  from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


const firebaseConfig = {
  apiKey: "AIzaSyB46jEBYZ0vpepn8X5bwEePgEK-ALc-QDk",
  authDomain: "clone-28f6e.firebaseapp.com",
  projectId: "clone-28f6e",
  storageBucket: "clone-28f6e.appspot.com",
  messagingSenderId: "1014807931544",
  appId: "1:1014807931544:web:5f7333216a5370e23cfeed"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =app.firestore();