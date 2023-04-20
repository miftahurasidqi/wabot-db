// Menampahkan Dependencies
const { default: makeWASocket, DisconnectReason, useSingleFileAuthState } = require("@adiwajshing/baileys");
const { Boom } = require("@hapi/boom");

const { state, saveState } = useSingleFileAuthState("../login.json");
const sock = require("../soket");

const { handleMeesaage } = require("./BotWhatsApp");

async function connectToWhatsApp() {
  //Fungsi untuk Mantau Koneksi Update
  // sock.ev.on("connection.update", PantauKoneksi);
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      const shouldReconnect = (lastDisconnect.error = Boom)?.output?.statusCode !== DisconnectReason.loggedOut;

      console.log("Koneksi terputus karena", ", hubugkan kembali !!!!");
      if (shouldReconnect) connectToWhatsApp();
    } else if (connection === "open") {
      console.log("Koneksi tersambung!");
    }
  });

  // Fungsi Untuk Menyimpan Koneksi
  sock.ev.on("creds.update", saveState);

  // Fungsi Untuk Mantau Pesan Masuk
  sock.ev.on("messages.upsert", async ({ messages, type }) => {
    console.log("Tipe Pesan: ", type);
    console.log(messages);
    if (type === "notify" && !messages[0].key.fromMe) {
      try {
        await handleMeesaage(messages);
      } catch (error) {
        console.log(error);
      }
    }
  });
}

module.exports = connectToWhatsApp;
