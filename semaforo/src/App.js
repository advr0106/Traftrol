import './App.css';
import React, { useState, useEffect, Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import TutorialDataService from "../src/services/tutorial.service";

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

//Class Nae

class Time extends Component {
  constructor(props) {
    super(props);
    this.updateTime = this.updateTime.bind(this);

    this.state = {
      currentTime: {
        key: null,
        color: "",
        tiempo: 0,
        tiempoactual: 0,
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { time } = nextProps;
    if (prevState.currentTime.key !== time.key) {
      return {
        currentTime: time,
        message: ""
      };
    }
    return prevState.currentTime;
  }

  componentDidMount() {
    this.setState({
      currentTime: this.props.time,
    });
  }

  onChangeTime(e) {
    const Time = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTime: {
          ...prevState.currentTime,
          tiempoactual: Time,
        }
      }
    })
  };

  updateTime() {
    const data = {
      tiempoactual: this.state.currentTime.tiempoactual
    };
    console.log("soy data", data);
  }


}


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

  //Probando -Nae

  //Update

  var tutorialsRef = firebase.database().ref("/semafaro");

  tutorialsRef.once('value', function (snapshot) {
    var tutorials = [];

    snapshot.forEach(function (childSnapshot) {
      var key = childSnapshot.key;
      var data = childSnapshot.val();
      // ...

      tutorials.push({ key: key, color: data.color, tiempo: data.tiempo, tiempoactual: data.tiempoactual });
    });
  });


  tutorialsRef.on('child_changed', function (data) {
    // data.key, data.val().title, data.val().description
  });

  //Actualizar valor en especifico

  tutorialsRef.child(this.key).update({
    tiempoactual: seconds
  });


TutorialDataService.update(this.state.currentTutorial.key, this.data)
  .then(() => {
    this.setState({
      message: "The semafaro was updated successfully!",
    });
  })
  .catch((e) => {
    console.log(e);
  });

//fin Nae

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
          <div onChange={this.currentTime.tiempoactual, this.updateTime} className="count">{seconds}</div>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
