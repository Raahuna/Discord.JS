const Discord = require('discord.js');
const config = require('../../config.json')
exports.run = function (client, message, args) {

    if (!message.guild.me.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS)) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`Birini yasaklamak için yeterli yetkiye sahip değilim!`)
            .setColor(config.Bot.EmbedColor)

        message.channel.send({ embeds: [embed] });
        return;
    }

    if (!args[0]) {
        const embed = new Discord.MessageEmbed()
            .setColor(config.Bot.EmbedColor)
            .setDescription(`Kimi yasaklayacağımı belirtmek için kullanıcıyı etiketleyebilirsin.`)

        message.channel.send({ embeds: [embed] });
        return;
    }

    let target = message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.guild.members.cache.find(member => member.user.username.toLowerCase() === args[0].toLowerCase()) ||
        message.guild.members.cache.find(member => member.displayName.toLowerCase() === args[0].toLowerCase()) ||
        message.guild.members.cache.find(member => member.user.tag.toLowerCase() === args[0].toLowerCase())

    if (!target) {
        const embed = new Discord.MessageEmbed()
            .setColor(config.Bot.EmbedColor)
            .setDescription(`Kullanıcıyı bulamadım!`)

        message.channel.send({ embeds: [embed] });
        return;
    }

    if (target === message.guild.me) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`Uhm..? S-sanırım istenmiyorum...`)
            .setColor(config.Bot.EmbedColor)

        message.channel.send({ embeds: [embed] });
        return;
    }
    if (target === message.member) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`Kendini yasaklamana izin veremem.. B-bu çok üzücü 🥺`)
            .setColor(config.Bot.EmbedColor)

        message.channel.send({ embeds: [embed] });
        return;
    }

    if (message.member.roles.highest.position < target.roles.highest.position && message.member.id !== message.guild.ownerId) {
        const embed = new Discord.MessageEmbed()
            .setColor(config.Bot.EmbedColor)
            .setDescription(`Kullanıcının rolü sizin rolünüzden yüksek!`)

        message.channel.send({ embeds: [embed] });
        return;
    }
    if (message.member.roles.highest.position === target.roles.highest.position && message.member.id !== message.guild.ownerId) {
        const embed = new Discord.MessageEmbed()
            .setColor(config.Bot.EmbedColor)
            .setDescription(`Kullancının rolü sizin rolünüz ile eşit!`)

        message.channel.send({ embeds: [embed] });
        return;
    }

    if (!target.bannable) {
        const embed = new Discord.MessageEmbed()
            .setColor(config.Bot.Color)
            .setDescription(`Bu kullanıcıyı yasaklayamıyorum.`)

        message.channel.send({ embeds: [embed] });
        return;
    }

    var reason = args.slice(1).join(' ');
    if (reason < 1) {
        reason = `Hiçbir sebep verilmedi.`;
    }

    target
        .ban({
            reason: `${reason}`,
        })
        .then(() => {

            const embed = new Discord.MessageEmbed()
                .setColor(config.Bot.EmbedColor)
                .setTitle(`${target.user.tag}`)
                .setDescription(`Sunucudan yasaklandı, Byee!`)
                .setFooter(`Sebep: ${reason}`)
            message.channel.send({ embeds: [embed] })
        })
}
exports.conf = {
    OutOfOrder: false,
    guildOnly: false,
    Aliases: [],
    Permission: null
};

exports.help = {
    Name: 'ban',
    Description: 'Kullanıcıyı sunucudan yasaklar.',
    Usage: 'ban <@user>'
};