import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA7fDsqYlOHne_cNDGagVCfYG-Mj3hE1rY",
  authDomain: "auth-ff5ab.firebaseapp.com",
  projectId: "auth-ff5ab",
  storageBucket: "auth-ff5ab.appspot.com",
  messagingSenderId: "1015231546556",
  appId: "1:1015231546556:web:e170ebb85d36eb55b67cb9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);