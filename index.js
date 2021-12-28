//Tanımları yapalım
const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767, partials: ['CHANNEL'] }); // 32767 = Bütün intentler (partials özelliğini özel mesajları okumak için kullanacağız).
const fs = require('fs');
const moment = require("moment");
moment.locale('tr')
const ascii = require("ascii-table");
const config = require('./config.json');
require('./Events/eventLoader.js')(client);

//-------------------- Ayarlar konsolu --------------------//

const Panel = {
  //Hepsi sadece "true" veya "false" olabilir.
  "Show_Bot_DM": true, //Bu değer "true" olursa bota özel mesaj geldiğinde "Log_Channel" değerindeki ID numarasına mesaj gelir.
  "Show_Guild_Log": false, //Bu değer "true" olursa bot sunucuya eklendiğinde "Log_Channel" değerindeki ID numarasına mesaj gelir.
  "Reload_Comamnds": true, //Bu değer "true" olursa komutlarda değişiklik yapıldığında yeniden yükler. (Bu mod aktifken bir hata çıkarıp 8 saniye içerisinde çözemezsen sistem çöker.)
  "Meditation_Mode": false, //Bu değer "true" olursa Bot mesajları cevaplamaz.
  "Log_Channel": "CONSOLE" //"Show_Bot_Dm", "Show_Guild_Log" vs. özelliklerin hangi Discord kanalına kayıt edileceğini seçmek için kanal ID numarasını yazınız. Eğer mesajlarınızın konsola gelmesini istiyorsanız "CONSOLE" yazın.
}
module.exports = Panel;

//-------------------- Etiket = Ön ek --------------------//

client.on("messageCreate", message => { //Client on ile “messageCreate” olayına bir dinleyici koyalım. 

  if (message.guild) {
    let Prefix = config.Bot.Prefix; //Botun ön eki
    let replacedPrefix = `\\${config.Bot.Prefix.split('')}`.replace(/,/g, '\\') //Yine botun ön eki ama aralarında “\” var

    if (!message.mentions.members.first()) { return }; //Eğer mesaj içinde bahsetme yoksa dur.
    if (message.author.bot) { return }; //Eğer bahseden kişi bot ise dur.

    if (message.mentions.members.first().id === client.user.id) { //Eğer bahsedilen kişi bot prefixi gönder.
      const embed = new Discord.MessageEmbed()
        .setDescription(`👋 Selam, ben **${client.user.username}**! Ön ekim **${replacedPrefix}** olarak ayarlıdır.`)
        .setFooter(`${Prefix}yardım yazarak yardım menüme bakabilirsiniz.`)
        .setColor(config.Bot.EmbedColor)
      message.channel.send({ embeds: [embed] })
    }
  }
//-------------------- Özel Mesaj Kayıtı --------------------//

  if (Panel.Show_Bot_DM === true) {
    if (!message.guild) {
      const embed = new Discord.MessageEmbed()
      embed.setTitle(`💌 ${message.author.tag} tarafından bir özel mesaj`)
      embed.setDescription(`"${message.content}"`)
      embed.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      embed.setColor(config.Bot.EmbedColor)
      if (message.attachments.size > 0) {
        embed.setImage(message.attachments.first().url)
      }
      if (Panel.Log_Channel === "CONSOLE") {
        console.log(`${embed.title} tarafından bir özel mesaj!\n${embed.description}`)
        return;
      }
      client.channels.cache.get(Panel.Log_Channel).send({ embeds: [embed] });
    }
  }

//-------------------- Meditasyon Modu --------------------//

  if (Panel.Meditation_Mode === true) {
    message.react('😴')
    return;
  }
});

//-------------------- Sunucu Giriş-Çıkış Kayıtı --------------------//

if (Panel.Show_Guild_Log === true) {
  client.on("guildCreate", async guild => {
    var GuildOwner = await client.users.fetch(guild.ownerId)
    const embed = new Discord.MessageEmbed()
      .setTitle(guild.name)
      .setDescription(`
**Yeni bir sunucuya eklendim! 🥳**
------------------------------------
Sunucu Yaşı: ${moment(guild.createdTimestamp).fromNow()}
Sunucu Sahibi: ${GuildOwner.tag}
------------------------------------
Kullanıcı Sayısı: ${guild.members.cache.filter(member => !member.user.bot).size}
Bot Sayısı: ${guild.members.cache.filter(member => member.user.bot).size}
Kanal Sayısı: ${guild.channels.cache.filter(channel => channel.type === 'text').size}
------------------------------------`)
      .setColor(config.Bot.EmbedColor)
      .setFooter(guild.id)
      .setThumbnail(guild.iconURL({ dynamic: true }))
    if (Panel.Log_Channel === "CONSOLE") {
      console.log(`${embed.title}\n${embed.description}`)
      return;
    }
    client.channels.cache.get(Pane.Log_Channel).send({ embeds: [embed] })
  });

  client.on("guildDelete", async guild => {
    var GuildOwner = await client.users.fetch(guild.ownerId)
    const embed = new Discord.MessageEmbed()
      .setTitle(guild.name)
      .setDescription(`
**Bir sunucudan çıkarıldım... 🥺**
------------------------------------
Sunucu Yaşı: ${moment(guild.createdTimestamp).fromNow()}
Sunucu Sahibi: ${GuildOwner}
------------------------------------`)
      .setColor(config.Bot.EmbedColor)
      .setFooter(guild.id)
      .setThumbnail(guild.iconURL({ dynamic: true }))
    if (Panel.Log_Channel === "CONSOLE") {
      console.log(`${embed.title}\n${embed.description}`)
      return;
    }
    client.channels.cache.get(Panel.Log_Channel).send({ embeds: [embed] });
  });
}

//-------------------- Komutlar klasörünü yükle --------------------//

client.commands = new Discord.Collection();
client.Aliases = new Discord.Collection();
fs.readdir(`./Commands/`, (err, folders) => {
  folders.forEach(function (module) {
    var Table = new ascii("Komutlar");
    fs.readdir(`./Commands/${module}/`, (err, files) => {
      if (err) console.error(err)
      Table.setHeading(`(${files.length}) ${module}`, "Durum");
      files.forEach(function (file) {
        let props = require(`./Commands/${module}/${file}`);
        if (!file.endsWith(".js")) return;
        if (!props.help || !props.help.Name) {
          Table.addRow(props, `Hata ("Name" değeri ayarlanmadı)`);
        } else {
          Table.addRow(props.help.Name, "Hazır")
          client.commands.set(props.help.Name, props);
          props.conf.Aliases.forEach(alias => {
            client.Aliases.set(alias, props.help.Name)
          })
        }
      });
      console.log("\x1b[1m", "\x1b[36m", Table.toString(), "\x1b[0m");
    });
  });
});

//-------------------- Komutlar Klasörünü Yeniden Yükle --------------------//

if (Panel.Reload_Comamnds === true) {
  var interval = setInterval(async function () {
    fs.readdir(`./Commands/`, (err, folders) => {
      folders.forEach(function (module) {
        fs.readdir(`./Commands/${module}/`, (err, files) => {
          files.forEach(function (file) {
            let props = require(`./Commands/${module}/${file}`);
            if (!file.endsWith(".js")) return;
            delete require.cache[require.resolve(`./Commands/${module}/${file}`)];
            client.commands.delete(props.help.Name, props)
            client.commands.set(props.help.Name, props);
            props.conf.Aliases.forEach(alias => {
              client.Aliases.set(alias, props.help.Name)
            })
          });
        });
      });
    });
  }, 8000)
}

client.login(config.Bot.TOKEN) //Botuna token ile giriş yap
