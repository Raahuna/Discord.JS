const Discord = require('discord.js');
const config = require('../../config.json');
exports.run = function (client, message) {

    const embed = new Discord.MessageEmbed()
        .setColor(config.Bot.EmbedColor)
        .setDescription(`🏓Pong! **${client.ws.ping}ms**`)
    message.channel.send({ embeds: [embed] })

};

exports.conf = {
    OutOfOrder: false,
    GuildOnly: false,
    Aliases: ['ms'],
    Permissions: null,
};

exports.help = {
    Name: 'ping',
    Description: 'Botun gecikme süresini gösterir.',
    Usage: 'ping'
};