import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDU-5NsNEckSz5MyoWyn42zpJYOr8Uu3Aw",
  authDomain: "alwaysvacant.firebaseapp.com",
  projectId: "alwaysvacant",
  storageBucket: "alwaysvacant.appspot.com",
  messagingSenderId: "781758535962",
  appId: "1:781758535962:web:3ecb880553e83795bb74a3",
  measurementId: "G-4XLXLCKTZS"
  };

const fire = firebase.initializeApp(firebaseConfig);
  export default fire;