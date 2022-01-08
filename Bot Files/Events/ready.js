const moment = require("moment");
const config = require("../config.json");
const package = require("../package.json")

module.exports = async client => {
    if (client.ws.ping <= 0 || client.ws.ping >= 10000) { //Eğer bot çalıştırıldığında internet bağlantısı kötü ise yazdır.
        console.log("\x1b[33m", `⚠️ UYARI! | Kötü internet bağlantısı. [${new Intl.NumberFormat().format(client.ws.ping)}ms]`, "\x1b[0m"); console.log("\x1b[2m", "Bağlantı daha iyi olduğu zaman haber vereceğim!", "\x1b[0m"); var interval = setInterval(async function () { if (client.ws.ping <= 0 || client.ws.ping >= 10000) { return; } else { console.log("\x1b[32m", "\x1b[1m", `✅ BAŞARI | Daha iyi internet bağlantısı kuruldu, Uygulama(${client.user.username}) Aktifleştirildi! [${new Intl.NumberFormat().format(client.ws.ping)}ms]`, "\x1b[0m"); clearInterval(interval) } }, 3000)
    } else {
        //Bot hazır olduğunda konsola yazdır.
        console.log("\x1b[32m", "\x1b[1m", `✅ BAŞARI | Uygulama(${client.user.username}) Aktifleştirildi!`, "\x1b[0m");
    }

    let Rahuna = await client.users.fetch('528118080706969600');

    var Activities = [ //"Activities" için elemanlar ekleyelim
        `💡 Discord.JS v${package.dependencies["discord.js"].replace('^','').split('.')[0]}`,
        `👋 Selam, Ben ${package.author} tarafından yapıldım!`,
        `🧐 Kaynak: github.com/Raahuna (${Rahuna.tag})`,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               `🧐 Kaynak: github.com/Raahuna (${Rahuna.tag})`, //Ups.. Beni farkettin :c
    ];

    setInterval(function () { //"setInterval" fonksiyonu belirli bir sürede kendini tekrarlayan döngü oluşturur.
        const random = Math.floor(Math.random() * (Activities.length - 1) + 1);
        client.user.setPresence({
            status: 'online', //Bu değer "online", "idle", "dnd" ve "offline" olabilir, botun durumudur. Örnek: Rahatsız Etmeyin Modunda, Boşta
            activities: [{
                name: Activities[random], //Etkinlik için rastgele bir "Activities" elamanı seç.
                type: "PLAYING" //Bu değer; "PLAYING", "WATCHING", "LISTENING" ve "STREAMING" olmalıdır, botun etkinliğinin türüdür. Örnek: Minecraft Oynuyor, Spotify Dinliyor, 👀 Seni İzliyor vs.
            }]
        })
    }, 25000); //Döngü süresini 25000 Mili saniye (25 saniye) için ayarladık.
}