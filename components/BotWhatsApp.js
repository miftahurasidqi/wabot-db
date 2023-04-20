const insertDB = require("./MySqlQuwery");
const sock = require("../soket");
// Stela1234
// epiz_34052490

// dbname=epiz_34052490_ukk_pengaduan
// user=epiz_34052490
// password=Stela1234
// host=epiz_34052490.mysql.pythonanywhere-services.com
// host=sql305.epizy.com

// Grup
// [
//   {
//     key: {
//       remoteJid: '120363082165821083@g.us',
//       fromMe: false,
//       id: 'FFC4DC8B2E2079DF52A0D5DE2402A1AB',
//       participant: '6285840336445@s.whatsapp.net'
//     },
//     messageTimestamp: 1682015209,
//     pushName: 'Miftahurrofi',
//     message: Message { conversation: '00' }
//   }
// ]

// Japri
// [
//   {
//     key: {
//       remoteJid: '6285840336445@s.whatsapp.net',
//       fromMe: false,
//       id: '6310B02D64882A49E87F2C7A8E82C53F',
//       participant: undefined
//  },
//     messageTimestamp: 1682015209,
//     pushName: 'Miftahurrofi',
//     message: Message {
//       conversation: 'P',
//       messageContextInfo: MessageContextInfo {
//         deviceListMetadata: DeviceListMetadata {
//           senderKeyIndexes: [],
//           recipientKeyIndexes: [],
//           recipientKeyHash: [Uint8Array],
//           recipientTimestamp: [Long]
//         },
//         deviceListMetadataVersion: 2
//       }
// }
// }
// ]
const handleMeesaage = async (messages) => {
  const { key, messageTimestamp, pushName, message } = messages[0];
  const nomorPengirim = key.remoteJid;
  const pesanGrup = nomorPengirim.includes("@g.us");
  const pesanJapri = nomorPengirim.includes("@s.whatsapp.net");

  const tanggal = "32-10-2022";
  let pesan = message.conversation;
  // pesan = pesan.tolowerCase();
  console.log(pesan, "pesann");
  const data = [pushName, nomorPengirim, tanggal, pesan];
  if (pesanGrup) {
    console.log("Pesan Grup");
  } else if (pesanJapri) {
    console.log("Pesan Japri");

    await sock.sendMessage(nomorPengirim, { text: "Terimakasih telah melakukan pengaduan, kami akan segera menangapi pengaduan anda\n\n 😊" }, { quoted: messages[0] }, 2000);
    await insertDB(data);
  }
};

const MessageFromPrivate = async (messages) => {
  //
};
module.exports = {
  handleMeesaage,
};
