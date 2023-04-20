// Menampahkan Dependencies
const { default: makeWASocket, DisconnectReason, useSingleFileAuthState } = require("@adiwajshing/baileys");
const { Boom } = require("@hapi/boom");
const { state, saveState } = useSingleFileAuthState("./login.json");

const sock = makeWASocket({
  auth: state,
  printQRInTerminal: true,
  defaultQuertTimeoutMs: undefined,
});

module.exports = sock;
