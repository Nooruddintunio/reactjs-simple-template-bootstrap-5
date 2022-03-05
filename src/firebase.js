// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw4CQ0Lc4Cf5tY5pa7uEjeieLwKBzCRxc",
  authDomain: "myproject-78971.firebaseapp.com",
  projectId: "myproject-78971",
  storageBucket: "myproject-78971.appspot.com",
  messagingSenderId: "152826821985",
  appId: "1:152826821985:web:0597c7f8c58f518ea01920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();