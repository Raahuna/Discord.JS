const Discord = require('discord.js');
const config = require('../config.json');

module.exports = async message => {

  let Prefix = config.Bot.Prefix;
  var client = message.client;
  if(message.author.bot === true) return;
  if(!message.content.startsWith(Prefix)) return;

  var command = message.content.split(' ')[0].slice(Prefix.length).toLowerCase();
  var args = message.content.split(' ').slice(1);

  if (Prefix.includes(' ')) { //Hey! Burası senin için düşünülmüş bir kod satırı eğer burası olmasaydı ve sen Ön ekinde boşluk kullansaydın -Mob help gibi- çalışmayacaktı çünkü boşluklar aynı zamanda "args" olarak tanımlı mesajın ilk boşluğu "args[0]" oluyor ve ön ekte boşluk varsa ön ek argümanlara karışırdı, ama bu sefer olmayacak hepsi düşünüldü ve hazırlandı!
    var Slice = 1 //Eğer ön ek boşluk içermiyorsa ilk argümandan 1 karakter sil. (Komut: "help", Ön ek: "M o b" 1. argüman "M", 2. argüman "o", 3. argüman "bhelp" | Bir karakter sildi çünkü komut "help", "bhelp" değil.)
    if(Prefix.endsWith(' ')) var Slice = 0 //Ön ek yoksa karakter silme (Zaten son boşluktan aldığından gerek kalmaz.)
    
    var command = message.content.split(' ')[Prefix.match(/ /g).length].slice(Slice).toLowerCase(); //0 (1). argüman yerine ön ekteki boşluk sayısı kadar git ve en sonda olan boşluğu komut olarak ayarla.
    var args = message.content.split(' ').slice(Prefix.match(/ /g).length+1); //Argümanlar içinde aynı şey geçerli komuttan sonraki boşlukları al.
  }

  let commandExports;
  if(client.commands.has(command)) {
    commandExports = client.commands.get(command);
  } else if(client.Aliases.has(command)) {
    commandExports = client.commands.get(client.Aliases.get(command));
}
  if(commandExports) {
    //Bakımda
    if(commandExports.conf.OutOfOrder === true) {
        if(message.author.id !== config.Bot.OwnerID) {
        const embed = new Discord.MessageEmbed()
          .setDescription(`**❌ Bu komut geçici olarak bakıma alınmıştır.**`)
          .setColor(config.Bot.EmbedColor)
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
        return;
      }
    }
    //Sadece Sunucu İçinde Kullanılabilir
    if(commandExports.conf.guidOnly === true) { //Eğer komut sadece sunucular için çalışır durumdaysa, Dm üzerinde kullanıldığında engelle.
      if(!message.guild) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`**❌ Bu komut özel mesajlar üzerinde kullanılamaz**`)
        .setColor(config.Bot.EmbedColor)
      message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
      return;
      }
    }
    //İzinler
    if(commandExports.conf.Permission === null || !commandExports.conf.Permission || commandExports.conf.Permission === "APP_OWNER") { var commandPermissions = "SEND_MESSAGES" } //Eğer komutun gereken izinleri seçili değilse, gereken izni "Mesaj Gönder" olarak ayarla.
    
    if(commandExports.conf.Permission === "APP_OWNER" && message.author.id !== config.Bot.OwnerID) {
      const embed = new Discord.MessageEmbed()
      .setDescription(`**❌ Bu komutu çalıştırmak için yeterli yetkiye sahip değilsiniz.**`)
      .setFooter(`Gereken Yetki: Bot Sahipliği`)
      .setColor(config.Bot.EmbedColor);
      message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } }); 
      return;
    }
    
    if(!message.member.permissions.has(Discord.Permissions.FLAGS[commandPermissions]) && !message.channel.permissionsFor(message.author.id).has(`${commandPermissions}`)) { //Kullanıcının yetkisi yoksa engelle.
      var commandPermissionsReplace = `${commandPermissions}` //İzin yazılarını değiştir.
        .replace('SEND_MESSAGES','Mesaj Gönder?') .replace('ADMINISTRATOR', 'Yönetici').replace('VIEW_AUDIT_LOG', 'Denetim Kaydını Görüntüle').replace('MANAGE_GUILD', 'Sunucuyu Yönet').replace('MANAGE_ROLES', 'Rolleri Yönet').replace('MANAGE_CHANNELS', `${client[language].Permissions.MANAHE_CHANNEL}`).replace('KICK_MEMBERS', `${client[language].Permissions.KICK_MEMBERS}`).replace('BAN_MEMBERS', `${client[language].Permissions.BAN_MEMBERS}`).replace('MANAGE_MESSAGES', 'Mesajları Yönet').replace('MANAGE_NICKNAMES', 'Kullanıcı İsimlerini Yönet').replace('MANAGE_EMOJIS', 'Emojileri Yönet').replace('MANAGE_WEBHOOKS', 'WebHook\'ları yönet').replace('MENTION_EVERYONE', 'Herkesten bahset')
      const embed = new Discord.MessageEmbed()
        .setDescription(`**❌ Bu komutu çalıştırmak için yeterli yetkiye sahip değilsiniz.**`)
        .setFooter(`Gereken Yetki: ${commandPermissionsReplace}`)
        .setColor(config.Bot.EmbedColor)
      message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
      return;
    }
    commandExports.run(client, message, args);
  }
};