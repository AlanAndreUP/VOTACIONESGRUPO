import mysql from 'mysql';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const db = mysql.createConnection({
      host: 'db4free.net',
      user: 'votaciones12',
      password: 'votaciones12',
      database: 'votaciones12',
    });

    db.connect((err) => {
      if (err) {
        console.error('Error al conectar a la base de datos:', err);
        res.status(500).json({ error: 'Error al conectar a la base de datos' });
        return;
      }

      const sql = 'INSERT INTO usuario (email, password) VALUES (?, ?)';
      db.query(sql, [email, password], (err, result) => {
        db.end();
        if (err) {
          console.error('Error al insertar los datos en la base de datos:', err);
          res.status(500).json({ error: 'Error al insertar datos en la base de datos' });
        } else {
          console.log('Datos insertados con éxito en la base de datos.');
          res.status(200).json({ message: 'Datos insertados con éxito' });
        }
      });
    });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
};
