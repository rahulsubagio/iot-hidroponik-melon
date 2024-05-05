import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI-XVWXzfKiZSrgInqKyWFiAy3T_LlXuU",
  authDomain: "iot-hidroponik-melon.firebaseapp.com",
  projectId: "iot-hidroponik-melon",
  storageBucket: "iot-hidroponik-melon.appspot.com",
  messagingSenderId: "323158646726",
  appId: "1:323158646726:web:5cbd0ba83021b1c1f15cc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };