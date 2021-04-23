import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyA4Y6yi8rENqv4Zc-VPiGtHwNg6xgjEie8",
  authDomain: "traftol-firebase.firebaseapp.com",
  databaseURL: "https://traftol-firebase-default-rtdb.firebaseio.com",
  projectId: "traftol-firebase",
  storageBucket: "traftol-firebase.appspot.com",
  messagingSenderId: "725951346265",
  appId: "1:725951346265:web:fd0f5de5042805a0c5e348",
  measurementId: "G-7JKMVD90RZ"
};

firebase.initializeApp(config);

export default firebase.database();