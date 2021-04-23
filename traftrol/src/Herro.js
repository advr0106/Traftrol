import React from 'react';






const Hero = (props) =>{

    const { 
        email,setEmail,
       
        handleLogout,
        } = props;
   



    return(

        <section className= "hero">
                <nav>
                     <h2>  <img src = "" />  Bienvenido a  <span className="Trafword" > <b> Traftol </b>   </span></h2>
                     <button onClick={handleLogout} >Cerrar Sesión</button>
                </nav>


             
             <br></br>


            <section className="Container1">
       
                  

            <section>

                    <div className="App">
                        <div className="principal">
                        

                            <h2 className= "Semaforotexto">Semáforo Actualmente </h2>
                            <div className="container">
                                <div className="circle red" color="red"></div>
                                <div className="circle" color="yellow"></div>
                                <div className="circle" color="green"></div>
                            </div>
                          
                          
                        </div>
                        <div className="sticks">
                            <div className="counter">
                                <div className="count">23</div>
                            </div>
                            </div>
                    </div>
                    </section>
            </section>

        </section>

    
     

    )

}
const circles = document.getElementsByClassName('circle')
let activeLight = 0;

setInterval(() => {
  changeLight();
}, 1000);

function changeLight() {
  circles[activeLight].className = 'circle';
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
    
  }

  const currentLight = circles[activeLight]

  currentLight.classList.add(currentLight.getAttribute('color'));
}

/*  App() {
    const [seconds, setSeconds] = React.useState(50);
    React.useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds(50);
      }
    }); */
 
 

export default Hero;