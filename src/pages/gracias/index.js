import React from 'react';
import Link from 'next/link';


const Gracias = () => {
  return (
    <div className="body">
    <div className="navbar">Votación Reyna de la Escuela Prepa 4</div>
    <h1>GRACIAS POR TU VOTO</h1>
    <div className="options">
      <div className="option">
        <img src="/photo2.jpg" alt="Opción 1" />
        <p>Angelica Reyes 3 A</p>
        <button >45 Votos</button>
      </div>
      <div className="option">
        <img src="/photo1.jpg" alt="Opción 2" />
        <p>Sofia Andrea 5 C</p>
        <button> 35 Votos</button>
      </div>
      <div className="option">
        <img src="/photo3.jpg" alt="Opción 3" />
        <p>Yamilet Diaz 1 B</p>
        <button>10 Votos</button>
      </div>
    </div>
    <style jsx>{`
      .navbar {
        background-color: #9D6AF3; /* Color de fondo morado */
        color: white;
        padding: 15px;
        text-align: center;
        font-size: 20px;
      }

      .body {
        background-color: #5E63F3; /* Color de fondo azul */
        font-family: Arial, sans-serif;
        width:100%
      }

      h1 {
        color: white;
        text-align: center;
      }

      .options {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
      }

      .option {
        background-color: white;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        width: 30%;
        text-align: center;
      }

      .option img {
        width: 100%;
        max-height: 250px;
      }

      button {
        background-color: #5E63F3; /* Color de fondo azul */
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    `}</style>
  </div>
  );
};

export default Gracias;
