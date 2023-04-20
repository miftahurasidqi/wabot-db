const dbConnection = require("./DB-Conect");

const insertDB = async (data) => {
  try {
    const [rows, fields] = await dbConnection.execute(`INSERT INTO pengaduan_wa (nama, nomor, tanggal, pesan) VALUES (?, ?, ?, ?)`, data);
    console.log(`Connected to MySQL database! ${rows}`);
  } catch (error) {
    console.error("error");
  }
};

module.exports = insertDB;
