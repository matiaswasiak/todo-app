// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUE_jHa3DoSC8en8img0KEe4SEnbwlUTw",
  authDomain: "todo-app-cp-fafa8.firebaseapp.com",
  projectId: "todo-app-cp-fafa8",
  storageBucket: "todo-app-cp-fafa8.appspot.com",
  messagingSenderId: "193945487302",
  appId: "1:193945487302:web:92a307c25e9c8e370414c7",
  measurementId: "G-4EJ60KPL5D",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;

// const db = firebaseApp.firestore();

// export default db;
