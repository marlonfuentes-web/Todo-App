const sql = require('mssql');

const config = {
  server: '(localdb)\\mssqllocaldb',
  database: 'Todo_AppDb-Test',
  options: {
    trustedConnection: true
  }
}

const pool = new sql.ConnectionPool(config);

pool.connect()
  .then(() => {
    console.log('Connected to LocalDB instance.');
  })
  .catch((err) => {
    console.error(err);
  });


