const reqEvent = (event) => require(`./${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client)); //Hazır olduğunda "ready.js" dosyası ile bağlantı kur.
  client.on('messageCreate', reqEvent('messageCreate')); //Mesaj gönderildiğinde olduğunda "messageCreate.js" dosyası ile bağlantı kur.
};