import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2abymto5MC_IY1KO9bsd38VB2G9vvmkw",
  authDomain: "tourism-management-6eed5.firebaseapp.com",
  projectId: "tourism-management-6eed5",
  storageBucket: "tourism-management-6eed5.appspot.com",
  messagingSenderId: "814295973173",
  appId: "1:814295973173:web:5faaf2724a6091a710207c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;