const reqEvent = (event) => require(`./${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
};
