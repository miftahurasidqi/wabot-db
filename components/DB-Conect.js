const mysql = require("mysql2");

// Buat koneksi ke database MySQL
const dbConnection = mysql.createConnection({
  host: "sql305.epizy.com",
  user: "epiz_34052490",
  password: "Stela1234",
  database: "epiz_34052490_ukk_pengaduan",
});

module.exports = dbConnection;
