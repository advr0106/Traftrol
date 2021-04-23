import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA4Y6yi8rENqv4Zc-VPiGtHwNg6xgjEie8",
    authDomain: "traftol-firebase.firebaseapp.com",
    projectId: "traftol-firebase",
    storageBucket: "traftol-firebase.appspot.com",
    messagingSenderId: "725951346265",
    appId: "1:725951346265:web:fd0f5de5042805a0c5e348",
    measurementId: "G-7JKMVD90RZ"
  };

const fire = firebase.initializeApp(firebaseConfig);
  export default fire;