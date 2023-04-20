const connectToWhatsApp = require("./components/WaBot");
const dbConnection = require("./components/DB-Conect");

connectToWhatsApp().catch((err) => {
  console.log("WhatsApp Error, " + err);
});

// insertDB();

// Cek koneksi ke database MySQL
dbConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});
