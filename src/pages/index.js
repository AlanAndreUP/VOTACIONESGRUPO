import Link from 'next/link';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from 'next/router';
const MySwal = withReactContent(Swal);

const VotacionReina = () => {
  const router = useRouter();
  const votar = (opcion) => {
    MySwal.fire({
      title: 'Validar Identidad',
      text: `Para confirmar tu voto para ${opcion}, debes iniciar sesión en Facebook.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/face');
      }
    });
  };

  return (
    <div className="body">
      <div className="navbar">Votación Reyna de la Escuela Prepa 4</div>
      <h1>¿Cuál es tu elección?</h1>
      <div className="options">
        <div className="option">
          <img src="/photo2.jpg" alt="Opción 1" />
          <p>Angelica Reyes 3 A</p>
          <button onClick={() => votar('Angelica Reyes')}>Votar</button>
        </div>
        <div className="option">
          <img src="/photo1.jpg" alt="Opción 2" />
          <p>Sofia Andrea 5 C</p>
          <button onClick={() => votar('Sofia Andrea')}>Votar</button>
        </div>
        <div className="option">
          <img src="/photo3.jpg" alt="Opción 3" />
          <p>Yamilet Diaz 1 B</p>
          <button onClick={() => votar('Yamilet Diaz')}>Votar</button>
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

export default VotacionReina;
