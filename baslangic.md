# ⏩ Başlangıç

## 🤖 Kendi botunu oluştur

🏷️ | **Botlar, sunucunuzda otomatik olarak birçok yararlı görevi gerçekleştirebilen yararlı yapay zekadır. Bu, yeni üyeleri karşılamayı, sorun çıkaranları yasaklamayı ve tartışmayı yönetmeyi içerir. Hatta bazı botlar sunucunuza müzik veya oyunlar ekler.**

➕ | **Bot oluşturmak için [Discord Developer Portal](https://discord.com/developers/applications) sitesinde giriş yapmalısınız. Hesabınız ile oturum açtıktan sonra `New Application` butonuna tıklayınız.**

<img src="https://user-images.githubusercontent.com/80279532/141969338-bcc1283c-c2ae-4897-a07b-f3e25e0e0c5a.png" width="700">

🪧 | **Şimdi sırada bir isim seçmek kaldı, kısa ve kolay telaffuz edilen bir isim seçmenizi tavsiye ederim, tıpkı görseldeki gibi!**

<img src="https://user-images.githubusercontent.com/80279532/141971052-6f46dd7d-4a3a-477d-a588-db1ab51d2d9f.png" width="350">

📷 | **Kolay İsimimizide seçtiğimize göre, kolay anlaşılır ve anlamlı bir fotoğrafı kırmızı ile işareti bölgeye tıklayıp logonuzu yükleyerek ilk adımı tamamlamış olacaksınız.**

<img src="https://user-images.githubusercontent.com/80279532/141973468-767d557d-0136-43af-a6fb-2cabed27a893.png" width="400">

**❗ | Ardından değişiklikleri kaydetmeyi sakın unutma, yoksa o anlamlı avatarınız sonsuza dek... y-yok olacak! 0_0**

<img src="https://user-images.githubusercontent.com/80279532/141974392-4a8b2419-6a65-4a93-bde0-11601ef33bef.png" width="500">

**⏰ | Neredeyse bitmek üzere! Yandaki bardan `Bot` yazısına tıklayın**

<img src="https://user-images.githubusercontent.com/80279532/141975274-0d643ed0-835f-4636-97d7-f857da829ade.png" width="200">

⚙️ | **Yeni sayfada sağ üstteki...**

<img src="https://user-images.githubusercontent.com/80279532/141977023-93c5e2b8-2bb4-411f-9cf5-9ed012a98fcd.png" width="550">

⚙️ | **Pardon birazcık aşağı iner misin?**

<img src="https://user-images.githubusercontent.com/80279532/141976689-31cd403a-8e37-43fd-8ee6-549de6d055d0.png" width="550">

⚙️ | **Heh şimdi oldu "Add Bot" seçeneğine tıklayıp `Yes, do it!`  dediğinizde her şey hazır olacak!**

🦉 | **Ekstra bilgi**

🖥️ | **Aşağıdaki kapama açma tuşları görseldeki gibi olmalı, `Copy` seçeneği ile tokeninizi kopyalayabilirsiniz. Not: Tokenin senin botunun şifresi gibidir, eğer birisi tokenine erişirse kodlarına eklemeler yapabilir, eğer tokeninin çalındığını düşünüyorsan `Regenerate` butonuna tıklayıp yenileyebilirsin.**

<img src="https://user-images.githubusercontent.com/80279532/147645668-8a78617f-28a1-416d-a524-bbc6ba04a8f6.png" width="550">

## 🤖 Botunu Sunucuna Ekle.

🧠 | **Discord bot daveti bağlantıları karışık olabilir ama bir mantığı vardır. eğer mantık ile uğraşmak istemiyorsan kolay yolu seçebilirsin, ama ondan önce botunuzun ID'sini almalısınız. ID almak için `General Information` sekmesinden `Application ID` altında yazan sayı botunuza özel ID numarasıdır.**

<img src="https://user-images.githubusercontent.com/80279532/142192158-d30411ee-885b-43bc-ba62-dcd28dc63439.png" width="350">

🤓 | **Kolay Yol**

**Sayılarla uğraşmak istemiyorsanız [Discord Permission Calculator](https://discordapi.com/permissions.html) sitesini kullanabilirsiniz. Kutucukları istediğiniz yetkilere göre işaretledikten sonra Client ID'nizi yazıp `Link:` yazan satırın yanında bağlantıya tıklayıp bir sunucu seçtikten sonra o sunucuya botunuzu ekleyebilirsiniz.**

<img src="https://user-images.githubusercontent.com/80279532/141980487-dee46778-8245-4d19-9aab-8d1dcf485af3.png" width="450">

😎 | **Zor Yol**

**Linkler `discord.com/oauth2/authorize?client_id=` olarak başlar `client_id=` kısımından sonrasına botunuzun ID'sini yazacaksınız, sonrasına ID numaranızı yazdıktan sonra `discord.com/oauth2/authorize?client_id=910117190517264436` şeklini alacak ama bitmedi! sonrasında "&scope=bot&permissions=8" yazmanız gerekir sondaki 8 sayısı botun `Yönetici` yetkisi alacağını belirtir, eğer yetkileri seçmek istiyorsanız `8` yerine `1099511627775` yazınız.**

## 🤖 Gerekli uygulamalar & Kurulum.

🔹 [Visual Studio Code](https://code.visualstudio.com) (Kaynak kodu düzenleyicisi)

🟢 [Node JS](https://nodejs.org/en/) (Javascript Runtime)

### ⚙️ | Node JS (Kurulum)

**Adım 1) Sürüm Seç**

<img src="https://wsvincent.com/assets/images/install-node-npm-windows/img1.png" width="350">

**Adım 2) İnen uygulamayı aç**

<img src="https://wsvincent.com/assets/images/install-node-npm-windows/img2.png" width="350">

**Adım 3) Gördüğün her şeyde sadece `Next` tuşuna tıkla... Ne var? Bu şekilde anlatmak daha kolay.**

<img src="https://wsvincent.com/assets/images/install-node-npm-windows/img3.png" width="250"> <img src="https://wsvincent.com/assets/images/install-node-npm-windows/img4.png" width="250"> <img src="https://wsvincent.com/assets/images/install-node-npm-windows/img5.png" width="250">

### ⚙️ | Visual Studio Code (Kurulum)

**Adım 1) "[Anlaşmayı Kabul Ediyorum](https://youtu.be/I0ld-0OKBLM)" seçeneği işaretleyip `İleri` tuşuna basın**

<img src="https://user-images.githubusercontent.com/80279532/142194622-15570c3c-d8f2-418d-9626-bb9f31186750.png" width="250">

**Adım 2) Bütün kutucukları işaretlemeniz işinizi kolaylaştıracaktır**

<img src="https://user-images.githubusercontent.com/80279532/142194626-fef2566a-7995-4e0e-b71b-8522420d36e8.png" width="250">

**Adım 3) `Kur` seçeneğine tıklayın**

<img src="https://user-images.githubusercontent.com/80279532/142194634-aeef3028-2249-475f-9adf-efed97e87da5.png" width="250">

## 📦 | Botun İçin Paket Kur.

📁 | **Bir Klasör Oluştur**

**Oluşturmayı bilmiyor musun? Sorun değil! Masa Üstünde boş bir yere sağ tıkla `Yeni` seçeneğine tıkla ve `Yeni Klasör` seçeneğini seç ardından bir isim girebilirsin bu isim botunun adı ile alakalı olursa daha iyi olur.**

📟 | **NPM ile kurulum**

**Klasörü açıp boş bir yerine `shift + sağ tık` yaparak seçenekleri açın ardından `PowerShell penceresini burda açın seçeneğine tıklayın.`**

<img src="https://user-images.githubusercontent.com/80279532/142381506-09b3832d-6b07-4a83-b4e7-75881d3ace44.png" width="400">

**Açılan pencereye `npm init` yazın, kısa bir süre bekledikten sonra size bir kaç şey soracak**

**package name: (Türkçe karakterler ve boşluk kullanmadan bir ad girin.)**

**version: (Uhm... ne işe yaradığını bilmiyorum `0.0.1` yazıyorum hep.)**

**description: (Bu paketinizin açıklamasıdır boş bırakılabilir.)**

**entry point: (Sizin ana dosyanızın adıdır. Genellikle buraya `bot.js`, `server.js`, `index.js` vb. yazarlar. Sonda `.js` olmalı)**

**test command: (Terminalinizden çalıştırırken nasıl çalıştıracağınızı ayarlayın. `node "main dosyanızın adı"` şeklinde ayarlayabilirsiniz.)**

**git repostory: (Bunu şu anlık boş bırakabilirsiniz.)**

**keywords: (Bunuda boş bırakabilirsiniz.)**

**author: (Kendi adınızı ya da nickinizi yazınız.)**

**license: (`ISC` yazınız.)**

**Is this OK? (Her şey hazır onaylamanız için `yes` yazın.)**

<img src="https://user-images.githubusercontent.com/80279532/142384435-8bd0eb08-11a8-413f-b920-52043bb0aadb.png" width="500">

**Klasörünüzü tekrar açtığında bir adet `package` adlı bir dosya görüyorsanız başardınız demektir! Ama dur, daha bitmedi şimdi ise PowerShell penceresine bu sefer `npm install discord.js` yazıyoruz bu discord.js kütüphanesini indirmemizi sağlayacak, biraz beklediğinizde bitecek. Bittiği zaman klasörünüzde üç dosya olmuş olacak `node_modules`, `package`, `package-lock` dosyalarını görüyorsanız artık PowerShell pencresini kapatabilirsiniz. Hiç dosya görmüyor musun? Ümidini kesme Discord'dan (Rahuna#3434) bana DM atabilir yada GitHub'dan soru açabilirsin.**

## **🗃️ | Dosyaları Oluştur**

**Visual Studio uygulamasını açtığınız zaman `Basılı Tut)ctrl + k + o` tuşuna basın veya yukarıdaki seçenekler barında `Dosya(Folder olarakta gözükebilir)` seçeneğini seçip, açılan menüden `Klasör Aç (Open Folder olarakta gözükebilir)` seçeneğine tıkladığınızda dosyalarınız karşınıza çıkacaktır.**

📄 | **index.js**

**Botunuzun dosyasını seçip açın, soldaki barda `package.json` ve `package-lock.json` dosyaları gözükecektir, onun altında boş bir alana farenizin sağ tuşu ile tıklayıp `Yeni Dosya (New File olarakda gözükebilir)` seçeneğine tıklayın, hatırlarsan [📟 | NPM ile kurulum](https://github.com/Raahuna/Discord.JS/blob/main/baslangic.md#--botun-i̇çin-paket-kur) kısmında `entry point` için bir dosya adı seçmiştik, şimdi aynı dosya adını buraya yazıp dosyanızı oluşturun. [İçine Yazılması Gereken Kod](https://github.com/Raahuna/Discord.JS/blob/main/Bot%20Files/index.js)**

📄 | **config.json**

**Ana dosya tamamdır, şimdi ise az önce yaptığımız gibi bir dosya oluşturup adını `config.json` yapıyoruz. Json dosyalarında değerlerin karşılıklarını kolaylıkla saklayabilirsin biz json dosyamızı token, ön ek, botun sahibi (sahipler için özel komutları çalıştırmak için) ve gömülü mesaj rengini ayarlamak için kullanacağız, [İçine Yazılması Gereken Kod](https://github.com/Raahuna/Discord.JS/blob/main/Bot%20Files/config.json). `TOKEN` karşısına botunuzun tokenini yapıştırınız, Tokene bakmayı bilmiyorsan [🤖 Kendi botunu oluştur](https://github.com/Raahuna/Discord.JS/blob/main/baslangic.md#-kendi-botunu-oluştur)** kısımında "🦉 | **Ekstra bilgi**" yerini okuyabilirsiniz. `OwnerID` karşısına kendi kullanıcı ID numaranızı yapıştırınız, "Prefix" karşısına ön ekinizi yapıştırınız Örnek: "!yardım" komutundaki "!" ön ektir, `EmbedColor` karşısına ise bir hex rengi girin ya da `RANDOM` olarak bırakabilirsiniz.**

📁 | **Events**

**Bu sefer bir klasör oluşturacaksınız, tıpkı dosya oluşturmak gibi ama `Yeni Dosya` yerine `Yeni Klasör (New Folder olarakda gözükebilir)` seçeneğini seçin, ismini ise `Events` yapın.**

📄 | **eventLoader.js**

**Bu botun karşılaştığı olaylarda sistemi bir dosyaya çekip işlem yapmamızı sağlayacak. [İçine Yazılması Gereken Kod](https://github.com/Raahuna/Discord.JS/blob/main/Bot%20Files/Events/eventLoader.js).**

📄 | **ready.js**

**Bot hazır olduğunda `eventLoader` dosyasındaki dinleyici bu dosyayı çalıştıracaktır, "Bla bla oynuyor" yazılarını botun durumu olarak ayarlar. [İçine Yazılması Gereken Kod](https://github.com/Raahuna/Discord.JS/blob/main/Bot%20Files/Events/ready.js)**

📄 | **messageCreate.js**

**Mesaj gönderildiğinde `eventLoader` dosyasındaki dinleyici bu dosyayı çalıştıracaktır, komutları denetler ve çalışmasını sağlar bu dosya içindeki kodlar olmadan komutlara tepki veremez. [İçine Yazılması Gereken Kod](https://github.com/Raahuna/Discord.JS/blob/main/Bot%20Files/Events/ready.js)**

📁 | **Commands**

**Tekrar bir klasör oluşturup adını `Commands` yapınız, ve içine bir `Category-1` ve `Category-2` klasörlerini açınız (adını değiştirebilirsiniz veya ), eğer klasör içine klasör açmakta zorlanıyorsan masaüstüne gelip botun klasörünün içinden bu işlemleri yapabilirsiniz.**

📁 | **Category-1**

**Test için içine bir dosya oluşturup bir kod yazabiliriz, `Category-1` içine `ping.js` adında bir dosya açınız.**

```js
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
```

## **❣️ | Botunu Aktifleştir**

📟 **| Botunuzu terminalden aktifleştirebilirsiniz, terminali açmak için `ctrl + shift + "` tuşlarına teker teker basınız, altta bir bar açılacak oraya `node .` veya `node "ana dosya".js` yazıp `enter` tuşuna basınız, yaklaşık 20 saniye sonra eğer hâlâ ✅ emojisi ile yeşil bir yazı görmüyorsanız, veya hata olarak büyük harflerle İngilizce yazılar görüyorsabız hata verdi demek. Destek için Discord üzerinden Rahuna#3434 kullanıcısına DM atıp sorunu bildirebilirsiniz.**

🥁 | **Hata almadınız ve ✅ emojisi ile "Uygulama Aktifleştirildi" yazısını gördüyseniiiz... İŞTE HER ŞEY HAZIR VE BOT ÇALIŞIYOR!!!**



[Devam Et...](https://github.com/raahuna/discord.js)
