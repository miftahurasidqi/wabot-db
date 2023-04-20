const connectToWhatsApp = require("./components/WaBot");
const dbConnection = require("./components/DB-Conect");
const express = require("express");

connectToWhatsApp().catch((err) => {
  console.log("WhatsApp Error, " + err);
});

const app = express();
app.use(express.json());
// Cek koneksi ke database MySQL
dbConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

app.get("/api/messages", (req, res) => {
  res.json({
    data: "Hello World",
  });
});

app.listen(3000, () => {
  console.log("API server is listening on port 3000");
});
