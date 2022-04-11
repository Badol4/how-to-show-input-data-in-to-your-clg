// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjJChXjdEztd6UaE5_coQa-PaNezY6M00",
  authDomain: "project-for-my-recap.firebaseapp.com",
  projectId: "project-for-my-recap",
  storageBucket: "project-for-my-recap.appspot.com",
  messagingSenderId: "812754982531",
  appId: "1:812754982531:web:e5f4a5ec06bd4526656db6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;