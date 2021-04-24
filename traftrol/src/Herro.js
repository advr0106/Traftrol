import React, { useState, useEffect, Component } from 'react';
import logo from '../src/Img/Logo.png'
import FireBase from '../src/FireBase';
import 'firebase/auth';
import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';

const circles = document.getElementsByClassName('circle')
let activeLight = 0;
let estado= '';
let tiempo='apagado';

const firestore = FireBase.firestore();
let semaRef = firestore.collection('semaforo').doc('green');

function changeLight() {
  circles[activeLight].className = 'circle';
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }

  const currentLight = circles[activeLight]

  currentLight.classList.add(currentLight.getAttribute('color'));
}

const Hero = (props) => {
  const [seconds, setSeconds] = React.useState(0);
  const semaforoRef = firestore.collection('semaforo');
  const query = semaforoRef;
  const [semaforos] = useCollectionData(query, { idField: 'id' });
  useEffect(() => {
    if(tiempo=='encendido'){
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        estado='Adelante, ya puedes cruzar';
        setSeconds(0);
        circles[activeLight].className = 'circle';
      }
    }else{
      setSeconds(0);
    }
  });

  function activado(){
    estado ='Ten paciencia, ya llegará tu turno :)';
    tiempo = 'encendido';
    circles[activeLight].className = 'circle';
    activeLight= 2;
    const currentLight = circles[activeLight]
  
    currentLight.classList.add(currentLight.getAttribute('color'));
    
    semaRef.get().then((doc) =>{
      setSeconds(Number(doc.data().tiempoactual))
    })
    
  }
  
  function cancelar(){
    circles[activeLight].className = 'circle';
    estado ='Ya no cruzarás :(';
    tiempo = 'apagado';
    setSeconds(0);
  }

  const {
    email, setEmail,

    handleLogout,
  } = props;

  return (

    <div className="hero">
      <nav>
        <div className="contain">
        <img src={logo} width="60" />
          <h2>
            Bienvenido a  <span className="Trafword" >
              <b> Traftol </b>
            </span>
          </h2>
        </div>
        <button onClick={handleLogout} >Cerrar Sesión</button>
      </nav>


      <br></br>


      <section className="Container1">



        <section>

      
            <div className="principal">

    
              <h2 className="Semaforotexto">Semáforo Actualmente </h2>
              

        
                <div className="container">
                  <div className="circle" color="red"></div>
                  <div className="circle" color="yellow"></div>
                  <div className="circle" color="green"></div>
                </div>


                <h2 className="Semaforotexto2">Tiempo de Espera</h2>
              <div className="sticks">
                <div className="counter">
                  <div className="count">{seconds}</div>
                </div>
              </div>

   
            </div>

            <div className="Segundodiv">
            <h2 className="Semaforotexto3">Acciones</h2>
             
    
           <input type="button" value="Presiona para avisar que cruzarás" onClick={activado} className="input1"/>
           <input type="button" value="Presiona para cancelar cruzarás" onClick={cancelar}    className="input2"/> 
           
           <p>{estado}</p> 
          </div>
  
  
  
        </section>

    
      </section>

      <footer>
          <h4>Traftol @All Rights Reseverd 2021</h4>
      </footer>

    </div>


      


  )

}





export default Hero;