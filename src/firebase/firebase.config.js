// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHRHzUclob4SZlEddHcS5xgw71ytT4TkY",
  authDomain: "developer-campus-auth.firebaseapp.com",
  projectId: "developer-campus-auth",
  storageBucket: "developer-campus-auth.appspot.com",
  messagingSenderId: "570277456851",
  appId: "1:570277456851:web:c30be030d021644bce5d26",
  measurementId: "G-H65JS312F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;