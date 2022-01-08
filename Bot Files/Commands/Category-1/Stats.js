const Discord = require("discord.js");
const config = require('../../config.json');
const package = require("../../package.json")
exports.run = async (client, message) => {

    const embed = new Discord.MessageEmbed()
        .setTitle(`💚 | **${client.user.username.toUpperCase()} DURUMU**`)
        .setDescription(`\`\`\`json\n{\n"📡 | Gecikme sürem": "${client.ws.ping}ms",\n"🔨 | Yapımcım": "${package.author}",\n"📁 | Sunucu sayısı": "${client.guilds.cache.size}",\n"👤 | Kullanıcı sayısı": "${client.users.cache.filter(User => User.bot === false).size}",\n"💿 | Komut Sayısı": "${client.commands.size}"\n}\`\`\``)
        .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
        .setFooter(`Sürüm: ${package.dependencies["discord.js"].replace('^','v')}`)
        .setColor(config.Bot.EmbedColor)
    message.channel.send({ embeds: [embed] })
}

exports.conf = {
    OutOfOrder: false,
    GuildOnly: false,
    Aliases: ['stats'],
    Permissions: null,
};

exports.help = {
    Name: 'status',
    Description: 'Botun bilgilerini verir.',
    Usage: 'status'
}; 