const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async client => {
  var oyun = ["Boss ❤️ Quarencia"];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], { type: "WATCHING" }); //WATCHING = İzliyor //PLAYİNG = Oynuyor //Listening = Dinliyor Gibi Düzenlenebilir
  }, 13000);
  client.user.setStatus("online"); //online = Aktif //dnd = Rahatsız Etmeyin Gibi Düzenlenebilir
console.log("Bot Hazır Boss #Quarencia ❤️")
};

