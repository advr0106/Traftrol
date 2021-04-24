import './App.css';
import React, { useState, useEffect, Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyDU-5NsNEckSz5MyoWyn42zpJYOr8Uu3Aw",
  authDomain: "alwaysvacant.firebaseapp.com",
  projectId: "alwaysvacant",
  storageBucket: "alwaysvacant.appspot.com",
  messagingSenderId: "781758535962",
  appId: "1:781758535962:web:3ecb880553e83795bb74a3",
  measurementId: "G-4XLXLCKTZS"
})

const firestore = firebase.firestore();
let color = 'red';
let count = 0;
let activeLight = 0;

const circles = document.getElementsByClassName('circle')

function changeLight() {
  circles[activeLight].className = 'circle';
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }

  const currentLight = circles[activeLight];
  currentLight.classList.add(currentLight.getAttribute('color'));
  color = currentLight.getAttribute('color')
}


function App() {

  const semaforoRef = firestore.collection('semaforo');
  const query = semaforoRef;
  const [semaforos] = useCollectionData(query, { idField: 'id' });
  const [seconds, setSeconds] = React.useState(20);
  let activeLight = 0;
  let semaRef = firestore.collection('semaforo').doc(color);


  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
      semaRef.update({
        tiempoactual: seconds
      })
    } else {
      changeLight();
      console.log('Heyyyy')
      semaRef= firestore.collection('semaforo').doc(color);
        semaRef.get().then((doc) => {
          setSeconds(Number(doc.data().tiempo)); 
        })
      
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
