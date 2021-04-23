import React from 'react';

const Login = (props) => {

   const { 
    email,
    setEmail, 
    password,
    setPassword,
    handelLogin,
    handleSignup,
    hasAccount,
    sethasAccount,
    emailError,
    passwordError,
    } = props;

   return (
   <section  className="login"> 
        <div className="loginContainer">
           <label>Usuario</label>
           <input type = "text" autoFocus required value={email} onChange= {e => setEmail(e.target.value)}/>
           <p  className="errorMsg">{emailError}</p>
           <label>Contraseña</label>
           <input type = "password" required value={password} onChange= {e => setPassword(e.target.value)}/>
           <p  className="errorMsg">{passwordError}</p>

          <div className="btnContainer">
               {hasAccount ? (
                   <>
                     <button onClick= {handelLogin}   >Ingresar</button>
                     <p>¿ No tienes una Cuenta ?  <span onClick ={() => sethasAccount(!hasAccount)} >Registrate</span> </p>

                   </>
               ): (
                <>
                <button  onClic = {handleSignup}>Registrate</button>
                <p> ¿Aún no Tienes Una Cuenta?  <span  onClick ={() => sethasAccount(!hasAccount)} >Ingresar</span> </p>

              </>
               ) }

          </div>


        </div> 
   


   
   
    </section>

   );

   



};

export default Login;