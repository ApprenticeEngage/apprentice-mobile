import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyA4ED_96OoNBcHbn7YN6ijAAIQLR-lZ_1g",

  authDomain: "apprentice-d7fd3.firebaseapp.com",

  projectId: "apprentice-d7fd3",

  storageBucket: "apprentice-d7fd3.appspot.com",

  messagingSenderId: "920025893847",

  appId: "1:920025893847:web:0f710644c13f5cd02cd992",

  measurementId: "G-LNBSKVR7VJ",
};

// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH =  getAuth(FIREBASE_APP);
