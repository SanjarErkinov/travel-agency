import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCwArMKBy4DXUTEmxLFElYioOE7YrF6vpQ",
  authDomain: "tourist-map-26dcf.firebaseapp.com",
  databaseURL:
    "https://tourist-map-26dcf-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "tourist-map-26dcf",
  storageBucket: "tourist-map-26dcf.appspot.com",
  messagingSenderId: "52035700522",
  appId: "1:52035700522:web:8927505aac48117987c053",
  measurementId: "G-0V7LM8SGDE",
};

const fire = initializeApp(firebaseConfig);
export default fire;
