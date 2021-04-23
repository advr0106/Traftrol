import './App.css';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyA4Y6yi8rENqv4Zc-VPiGtHwNg6xgjEie8",
  authDomain: "traftol-firebase.firebaseapp.com",
  databaseURL: "https://traftol-firebase-default-rtdb.firebaseio.com",
  projectId: "traftol-firebase",
  storageBucket: "traftol-firebase.appspot.com",
  messagingSenderId: "725951346265",
  appId: "1:725951346265:web:fd0f5de5042805a0c5e348",
  measurementId: "G-7JKMVD90RZ"
})

const App = ({ db = null }) => {
  const [seconds, setSeconds] = React.useState(5);
  const circles = document.getElementsByClassName('circle')
  let activeLight = 0;

  function changeLight() {
    circles[activeLight].className = 'circle';
    activeLight++;

    if (activeLight > 2) {
      activeLight = 0;
    }

    const currentLight = circles[activeLight]

    currentLight.classList.add(currentLight.getAttribute('color'));
  }

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(50);
      changeLight();
    }
  });
  return (
    <div className="App">
      <div className="principal">
        <div className="sticks">
          <div className="stick1"></div>
          <div className="stick2"></div>
        </div>
        <div className="container">
          <div className="circle red" color="red"></div>
          <div className="circle" color="yellow"></div>
          <div className="circle" color="green"></div>
        </div>
        <div className="sticks">
          <div className="stick3"></div>
        </div>
        <div className="sticks">
          <div className="counter">
            <div className="count">{seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
