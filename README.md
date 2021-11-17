# <img src="https://koya.gg/assets/img/discordjs-logo.png" width="48"> DISCORD JS ANLATIM ŞEYSİ

# 👋 | Selam burada Discord JS ile alakalı bilgileri paylaşıyorum bir başlangıç yeri seç! 
# [En baştan başlamak istiyorum!](https://github.com/Raahuna/Discord.JS#-kendi-botunu-oluştur)
# [Botumu oluşturdum devamı için bir şey yapmadım](https://github.com/Raahuna/Discord.JS#-botunu-sunucuna-ekle)
# [Discord JS hakkındaki bilgimi geliştirmek istiyorun](https://github.com/Raahuna/Discord.JS#yazılar-ve-argümanlar)**

# ⏩ Başlangıç

## 🤖 Kendi botunu oluştur.

🏷️ | *Botlar, sunucunuzda otomatik olarak birçok yararlı görevi gerçekleştirebilen yararlı yapay zekadır. Bu, yeni üyeleri karşılamayı, sorun çıkaranları yasaklamayı ve tartışmayı yönetmeyi içerir. Hatta bazı botlar sunucunuza müzik veya oyunlar ekler.*

➕ | **Bot oluşturmak için [Discord Developer Portal](https://discord.com/developers/applications) sitesinde giriş yapmalısınız. Hesabınız ile oturum açtıktan sonra "New Application" butonuna tıklayınız.**

<img src="https://user-images.githubusercontent.com/80279532/141969338-bcc1283c-c2ae-4897-a07b-f3e25e0e0c5a.png" width="700">

🪧 | **Şimdi sırada bir isim seçmek kaldı, kısa ve kolay telaffuz edilen bir isim seçmenizi tavsiye ederim, tıpkı görseldeki gibi!**

<img src="https://user-images.githubusercontent.com/80279532/141971052-6f46dd7d-4a3a-477d-a588-db1ab51d2d9f.png" width="350">

📷 | **Kolay İsimimizide seçtiğimize göre, kolay anlaşılır ve anlamlı bir fotoğrafı kırmızı ile işareti bölgeye tıklayıp logonuzu yükleyerek ilk adımı tamamlamış olacaksınız.**

<img src="https://user-images.githubusercontent.com/80279532/141973468-767d557d-0136-43af-a6fb-2cabed27a893.png" width="400">

**❗ | Ardından değişiklikleri kaydetmeyi sakın unutma, yoksa o anlamlı avatarınız sonsuza dek... y-yok olacak! 0_0**

<img src="https://user-images.githubusercontent.com/80279532/141974392-4a8b2419-6a65-4a93-bde0-11601ef33bef.png" width="500">

**⏰ | Neredeyse bitmek üzere! Yandaki bardan "Bot" yazısına tıklayın**

<img src="https://user-images.githubusercontent.com/80279532/141975274-0d643ed0-835f-4636-97d7-f857da829ade.png" width="200">

⚙️ | **Yeni sayfada sağ üstteki...**

<img src="https://user-images.githubusercontent.com/80279532/141977023-93c5e2b8-2bb4-411f-9cf5-9ed012a98fcd.png" width="550">

⚙️ | **Pardon birazcık aşağı iner misin?**

<img src="https://user-images.githubusercontent.com/80279532/141976689-31cd403a-8e37-43fd-8ee6-549de6d055d0.png" width="550">

⚙️ | **Heh şimdi oldu "Add Bot" seçeneğine tıklayıp "Yes, do it!"  dediğinizde her şey hazır olacak!**

## 🤖 Botunu Sunucuna Ekle.

🧠 | **Discord bot daveti bağlantıları karışık olabilir ama bir mantığı vardır. eğer mantık ile uğraşmak istemiyorsan kolay yolu seçebilirsin, ama ondan önce botunuzun ID'sini almalısınız. ID almak için "General Information" sekmesinden "Application ID" altında yazan sayı botunuza özel ID numarasıdır.**

<img src="https://user-images.githubusercontent.com/80279532/142192158-d30411ee-885b-43bc-ba62-dcd28dc63439.png" width="350">

🤓 | **Kolay Yol**

**Sayılarla uğraşmak istemiyorsanız [Discord Permission Calculator](https://discordapi.com/permissions.html) sitesini kullanabilirsiniz. Kutucukları istediğiniz yetkilere göre işaretledikten sonra Client ID'nizi yazıp "Link:" yazan satırın yanında bağlantıya tıklayıp bir sunucu seçtikten sonra o sunucuya botunuzu ekleyebilirsiniz.**

<img src="https://user-images.githubusercontent.com/80279532/141980487-dee46778-8245-4d19-9aab-8d1dcf485af3.png" width="450">

😎 | **Zor Yol**

**Linkler "discord.com/oauth2/authorize?client_id=" olarak başlar "client_id=" kısımından sonrasına botunuzun ID'sini yazacaksınız, sonrasına ID numaranızı yazdıktan sonra "discord.com/oauth2/authorize?client_id=910117190517264436" şeklini alacak ama bitmedi! sonrasında "&scope=bot&permissions=8" yazmanız gerekir sondaki 8 sayısı botun "Yönetici" yetkisi alacağını belirtir, eğer yetkileri seçmek istiyorsanız 8 yerine 1099511627775 yazınız.**

## 🤖 Gerekli uygulamalar & Kurulum.

🔹 [Visual Studio Code](https://code.visualstudio.com) (Kaynak kodu düzenleyicisi)

🟢 [Node JS](https://nodejs.org/en/) (Javascript Runtime)

### ⚙️ | Node JS (Kurulum)

**Adım 1) Sürüm Seç**

<img src="https://wsvincent.com/assets/images/install-node-npm-windows/img1.png" width="350">

**Adım 2) İnen uygulamayı aç**

<img src="https://wsvincent.com/assets/images/install-node-npm-windows/img2.png" width="350">

**Adım 3) Gördüğün her şeyde sadece "Next" tuşuna tıkla**

<img src="https://wsvincent.com/assets/images/install-node-npm-windows/img3.png" width="250"> <img src="https://wsvincent.com/assets/images/install-node-npm-windows/img4.png" width="250"> <img src="https://wsvincent.com/assets/images/install-node-npm-windows/img5.png" width="250">

### ⚙️ | Visual Studio Code (Kurulum)

**Adım 1) "[Anlaşmayı Kabul Ediyorum](https://youtu.be/I0ld-0OKBLM)" seçeneği işaretleyip "İleri" tuşuna basın**

<img src="https://user-images.githubusercontent.com/80279532/142194622-15570c3c-d8f2-418d-9626-bb9f31186750.png" width="250">

**Adım 2) Bütün kutucukları işaretlemeniz işinizi kolaylaştıracaktır**

<img src="https://user-images.githubusercontent.com/80279532/142194626-fef2566a-7995-4e0e-b71b-8522420d36e8.png" width="250">

**Adım 3) "Kur" seçeneğine tıklayın**

<img src="https://user-images.githubusercontent.com/80279532/142194634-aeef3028-2249-475f-9adf-efed97e87da5.png" width="250">

## ❣️ | Botunu Aktifleştir.

Az önce burdan ilerisini yazmıştım ama mükemmel bilgisayarım sağ olsun kapandı ve sıfırlandı yine ertelemek zorunda kaldım :c

## Yazılar ve Argümanlar

🏷️*Argümanlar bir yazının ikinci kelimesi veya dördüncü harften sonrası olabilir. Not: Argümanlar için sıfır, bir demektir bununla beraber girilen sayı onun bir fazlasına denk olur.*

### Pijamalı hasta, yağız şoföre çabucak güvendi..

> ### toLocaleLowerCase()
##### Büyük harfleri küçük harfe çevirir.
```js
var text = "PIJAMALI HASTA, YAĞIZ ŞOFÖRE ÇABUCAK GÜVENDI.";

console.log(text.toLocaleLowerCase()) //"pijamalı hasta, yağız şoföre çabucak güvendi."
```

> ### toUpperCase()
##### Küçük harfleri büyük harfe çevirir.
```js
var text = "pijamalı hasta, yağız şoföre çabucak güvendi.";

console.log(text.toUpperCase()) //"PIJAMALI HASTA, YAĞIZ ŞOFÖRE ÇABUCAK GÜVENDI."
```

> ### split()
##### Cümledeki seçilen karakteri siler ve yeni cümleyi listeler.
```js
var text = "Pijamalı hasta, yağız şoföre çabucak güvendi."

console.log(text.split(" ")) //'Pijamalı', 'hasta,', 'yağız', 'şoföre', 'çabucak', 'güvendi.'
console.log(text.split("e")) //'Pijamalı hasta, yağız şoför', ' çabucak güv', 'ndi.'
console.log(text.split(" ")[3]) //"şoföre"
```

> ### trim()
##### Cümlenin başındaki boşlukları siler.
```js
var text = "     Pijamalı hasta, yağız şoföre çabucak güvendi.     ";

console.log(text.trim()) //"Pijamalı hasta, yağız şoföre çabucak güvendi."
```

> ### lenght
##### Cümlede kaç karakter olduğunu gösterir.
```js
var text = "Pijamalı hasta, yağız şoföre çabucak güvendi.";

console.log(text.length) //45
```

> ### match()
##### Karakterin cümlede kaç kez geçtiğini gösterir ve bunları sıralayabilir.
```js
var text = "Pijamalı hasta, yağız şoföre çabucak güvendi.";

console.log(text.match(/a/g).length) //7
console.log(text.match(/a/gi)) //'a', 'a', 'a', 'a', 'a', 'a', 'a'
```

> ### slice()
##### Cümleye belli bir yerden başlatıp belli bir yerde bitirir.
```js
var text = "Pijamalı hasta, yağız şoföre çabucak güvendi.";

console.log(text.slice(0)) //"Pijamalı hasta, yağız şoföre çabucak güvendi."
console.log(text.slice(22)) //"şoföre çabucak güvendi."
console.log(text.slice(-16)) //"çabucak güvendi."
console.log(text.slice(0, 6)) //"Pijama"
```

> ### text.split("").reverse().join("")
##### Yazıyı ters çevirir.
```js
var text = "Pijamalı hasta, yağız şoföre çabucak güvendi.";

console.log(text.split("").reverse().join("")) //".idnevüg kacubaç eröfoş zığay ,atsah ılamajiP"
```

> ### replace()
##### Girilen karakteri yeni değer ile değiştirir.
```js
var text = "Pijamalı hasta, yağız şoföre çabucak güvendi.";

console.log(text.replace('çabucak güvendi', 'sarıldı')) //Pijamalı hasta, yağız şoföre sarıldı.
``` 

## Gömülü Mesaj

🏷️*Gömülü mesajlar botunuzun daha şık gözükmesini sağlar.*

> ### Yazar
```js
.setAuthor('Name','AvatarURL')
  ```
  
  *Bu şekilde kullanılır, **Name** yerine bir isim ve **AvatarURL** yerinede profil fotoğrafının linkini yazınız.*
  
  > ### Başlık
```js
.setTitle('TitleMessage')
  ```
  
  *Bu şekilde kullanılır, **TitleMessage** yerine ne yazarsanız mesaj başlığı o olur.*
  
   > ### Açıklama
```js
.setDescription('DescriptionMessage')
  ```
  
  *Bu şekilde kullanılır, **DescriptionMessage** yerine ne yazarsanız mesaj açıklaması o olur.*
  
  > ### Afiş
```js
.setImage('ImageURL')
  ```
  
  *Bu şekilde kullanılır, **ImageURL** yerine istediğiniz bir görselin linkini yazınız, en alta o resim eklenir.*
  
  > ### Görsel
```js
.setThumbnail('ImageURL')
  ```
  
  *Bu şekilde kullanılır, **ImageURL** yerine istediğiniz bir görselin linkini yazınız sağ üste o resimin küçük hali eklenir.*
  
  > ### Alt yazı
```js
.setFooter('FooterMessage','FooterIconURL')
  ```
  
  *Bu şekilde kullanılır, **FooterMessage** yerine istediğiniz bir mesajı, FooterIconURL yazan yere istediğiniz bir fotoğrafın linkini yazınız bu sizin alt yazınızdaki görseliniz ve yazınız olacaktır.*
  
> ### Başlık Bağlantısı
```js
.setURL('Link')
  ```
  
  *Bu şekilde kullanılır, **Link** yerine istediğiniz bir site bağlantısını yazınız, Başlık yazısı mavi olacaktır ve tıklandığında seçtiğiniz bağlantı açılacaktır.*
  
> ### Tarih
```js
.setTimestamp()
  ```
  
  *Sadece **.setTimestamp()** yazarsanız bu günün tarihini atacaktır*
  
  > ### Renk
```js
.setColor('#hexColor')
  ```
  
  *Bu şekilde kullanılır, **hexColor** yerine bir rengin hex rengi kodunu yazınız.*

> ### Hex Renkleri
  
🔴Kırmızı => #f80e12

🟠Turuncu => #e96c1c

🟡Sarı => #fffd00

🟢Yeşil => #83df13

🔵Mavi => #1d78e9

🟣Mor => #db00fb

🟤Kahverengi => #b44a0b

⚫Siyah => #020202

⚪Beyaz => #feffff

Daha fazla renk için [HTML Color Codes](https://htmlcolorcodes.com/) sitesini inceleyebilirsin!

![ExampleEmbed](https://user-images.githubusercontent.com/80279532/134047640-069f77cb-fbb2-4c83-8239-7fcf537eb934.png)

```js
client.on("message", message => {

    if(message.content === 'Hey Mob! Benim için bir gömülü mesaj oluşturur musun?') {
        const embed = new Discord.MessageEmbed()
        .setColor('#83df13')
        .setTitle('Mükemmel bir başlık')
        .setAuthor('Rahuna', 'https://avatars.githubusercontent.com/u/80279532?v=4')
        .setDescription('Alttaki fotoğrafa bakınca yakışıklı birisini görüyorum.')
        .setImage(`${message.member.user.displayAvatarURL()}`)
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .setFooter('<= Burdaki yakışıklıyı kastetmiştim üstüne alınmadın umarım.', client.user.displayAvatarURL())
    message.channel.send(embed);
    }
});
```

## Emojiler & Tepkiler

> ## Emoji eklemek
```js
message.guild.emojis
  .create('emojiLink', 'emojiName')
  ```
  
  *Bu şekilde kullanılır, **emojiLink** yerine bir emoji linki ve **emojiName** yerinede eklenecek emojinin isimini yazınız.*
  
🏷️*Emoji linkleri şu şekildedir => **https://cdn.discordapp.com/emojis/751979651340959774.png?v=1***

![get_emoji_link](https://user-images.githubusercontent.com/80279532/134048745-9777b4fe-bdbb-437a-b588-db7a7692c11d.png)

- **Bunu kopyalamak için bir emojiye **sağ** tıklayıp "Bağlantıyı Kopyala" seçeneğine tıklayınız.**

![AddEmoji](https://user-images.githubusercontent.com/80279532/134047771-9baa432d-ca1e-4a5d-80d5-9e53ff2b8bc4.png)

```js
client.on('message', message => {
    if (message.content === 'Hey Mob! Bu sunucuya güzel bir emoji ekler misin?') {
        message.channel.send('Tabiki')
        message.guild.emojis
        .create('https://cdn.discordapp.com/emojis/751979651340959774.png?v=1', 'ZeroDumb')
    }
});
```

> ## Tepki Eklemek

🏷️*İstediğiniz mesaja tepki ekleyebilirsiniz. Bu bir kullanıcınında mesajı olabilir, botunuzun mesajıda.*

> ### Mesajı gönderen kişinin mesajına tepki ekler.
```js
      message.react('🍪')
  ```
  
> ### Botun mesajına tepki ekler.
  ```js
      .then(function (message) {
            message.react('🍪')
          })
  ```
  
  
![Reactions](https://user-images.githubusercontent.com/80279532/134047886-6d48b259-bfc9-4764-80a8-b4fb11ad5d71.png)

```js
client.on('message', message => {
    if (message.content === 'Hey Mob! Bu mesaja tepki ekler misin?') {
        message.channel.send('Böyle oldu mu?').then(function (message) {
            message.react('🍪')
          })
    }
    if (message.content === 'Hayır, kendi mesajımı kastetmiştim.') {
        message.react('🍪')
    }
});
```

## Rastgele Seçim Uygulamak 

> ## Yazılanlardan rastgele birini seçmek
  ```js
  var CatNames = [
   "Pofuduk Kedi",
   "Şişman Kedi",
   "Vahşi Kedi",
  ];
  
       var RandomCatName = CatNames[Math.floor(Math.random(1) * CatNames.length)]
  ```
  *Yukarıda yazılan **"CatNames"** isimli kategori oluşturduktan sonra içine **"Pofuduk Kedi"**, **"Şişman Kedi"** ve **"Vahşi Kedi"** elemanlarını ekledik.*
  
![CatRandom](https://user-images.githubusercontent.com/80279532/134048021-f7cc38bc-6d60-47c5-a1e5-b07437fcee9e.png)

```js
client.on('message', message => {
    var CatNames = [
        "Pofuduk Kedi",
        "Şişman Kedi",
        "Vahşi Kedi",
       ];
       
       var RandomCatName = CatNames[Math.floor(Math.random(1) * CatNames.length)]

       if(message.content === 'Hey Mob! Sence ben nasıl bir kedi severim?'){
       message.channel.send(`${RandomCatName}`)
       }
       if(message.content === 'Tekrar denemek ister misin?') {
       message.channel.send(`${RandomCatName}`)
       }
})
```
 > ## Seçime göre değişiklik yapmak
  
  ``` js
    var CatNames = [
        "Pofuduk Kedi",
        "Şişman Kedi",
        "Vahşi Kedi",
       ];

       var RandomCatName = CatNames[Math.floor(Math.random(1) * CatNames.length)]

       if(RandomCatName === 'Pofuduk Kedi') { var CatInfo = 'Scottish fold kedilerin erkekleri genellikle 4-6, dişileri ise 2,7-4 kilo ağırlıktadır. Tüyleri kısadır, ancak Scottish fold longhair isimli uzun tüylü bir türü de vardır. Tüyleri çok çeşitli renklerde olabilir. Bu ırkta görülen tüy renkleri arasında tekir, tekir-beyaz, iki renkli, krem, duman, portakal sayılabilir.' }
       if(RandomCatName === 'Şişman Kedi') { var CatInfo = 'Hey şişman kedi diye bir tür yoktur bunu sen uydurdun!' }
       if(RandomCatName === 'Vahşi Kedi') { var CatInfo = 'Yetişkin bir aslanın ısırığı, herhangi bir ev kedisinin ısırığından 30 kat daha güçlüdür. Aslanlar hayatı boyunca ortalama 3.000 kez çiftleşir. Bir aslan 3 metre boya kadar ulaşabilir. Aslanlar, her gün en az 10 saat uyumaktadır' }

  ```
  **Daha önce **RandomCatName** olarak tanıttığımız kodun altına if() ler ile olacakları yazdık. If en önemli kodlardan biridir, şu anda kullandığımız kod kediyi seçmesini ardından hangi kedi çıkarsa **CatInfo** olarak tanıttığımız yazıda değişiklik yapmasını sağladık.**
  
  ![CatInfo](https://user-images.githubusercontent.com/80279532/134048098-d3d49dc1-5fe1-46e2-aee9-c271b92e1cc2.png)
  
  ```js
  client.on('message', message => {
    var CatNames = [
        "Pofuduk Kedi",
        "Şişman Kedi",
        "Vahşi Kedi",
       ];
       
       var RandomCatName = CatNames[Math.floor(Math.random(1) * CatNames.length)]

       if(RandomCatName === 'Pofuduk Kedi') { var CatInfo = 'Scottish fold kedilerin erkekleri genellikle 4-6, dişileri ise 2,7-4 kilo ağırlıktadır. Tüyleri kısadır, ancak Scottish fold longhair isimli uzun tüylü bir türü de vardır. Tüyleri çok çeşitli renklerde olabilir. Bu ırkta görülen tüy renkleri arasında tekir, tekir-beyaz, iki renkli, krem, duman, portakal sayılabilir.' }
       if(RandomCatName === 'Şişman Kedi') { var CatInfo = 'Hey şişman kedi diye bir tür yoktur bunu sen uydurdun!' }
       if(RandomCatName === 'Vahşi Kedi') { var CatInfo = 'Yetişkin bir aslanın ısırığı, herhangi bir ev kedisinin ısırığından 30 kat daha güçlüdür. Aslanlar hayatı boyunca ortalama 3.000 kez çiftleşir. Bir aslan 3 metre boya kadar ulaşabilir. Aslanlar, her gün en az 10 saat uyumaktadır' }

       if(message.content === 'Hey Mob! Bir kedi hakkında bilgi verir misin?'){
       message.channel.send(`**${RandomCatName}**\n${CatInfo}`)
       }
       if(message.content === 'Teşekkürler, bir tane daha kedi hakkında bilgi verir misin?'){
        message.channel.send(`**${RandomCatName}**\n${CatInfo}`)
        }
    })
  ```
  
 🏷️*Az önceki kodda kullandığımız \n satır atlamaya yarar. **"ctrl + alt + \*"** ile ters slash (\) koyabilirsiniz. Diğer kesme işaretleri içinde (**"** veya **'**) içinde satır atlayamazsınız. İtediğiniz gibi yazabilmeniz için **"ctrl + alt + , + space"** içine yazarakta bunu yapabilirsiniz. Ayrıca tanıttıktan sonra onu kullanmak için yazdığımız **${}** sadece **\`** içerisinde iken çalışır.*
  
 > ## Seçime göre değişiklik yapmak (Daha Basit)
  
```js
  client.on('message', message => {
var Cats = [
      {
        Name: "Pofuduk Kedi",
        Info: "Scottish fold kedilerin erkekleri genellikle 4-6, dişileri ise 2,7-4 kilo ağırlıktadır. Tüyleri kısadır, ancak Scottish fold longhair isimli uzun tüylü bir türü de vardır. Tüyleri çok çeşitli renklerde olabilir. Bu ırkta görülen tüy renkleri arasında tekir, tekir-beyaz, iki renkli, krem, duman, portakal sayılabilir."
      },
      {
        Name: "Şişman Kedi",
        Info: "Hey şişman kedi diye bir tür yoktur bunu sen uydurdun!"
      },
      {
        Name: "Vahşi Kedi",
        Info: "Yetişkin bir aslanın ısırığı, herhangi bir ev kedisinin ısırığından 30 kat daha güçlüdür. Aslanlar hayatı boyunca ortalama 3.000 kez çiftleşir. Bir aslan 3 metre boya kadar ulaşabilir. Aslanlar, her gün en az 10 saat uyumaktadır"
      }]

       var RandomCat = Cats[Math.floor(Math.random(1) * Cats.length)]
       
       if(message.content === 'Hey Mob! Bir kedi hakkında bilgi verir misin?'){
       message.channel.send(`**${RandomCat.Name}**\n${RandomCat.Info}`)
       }
       if(message.content === 'Teşekkürler, bir tane daha kedi hakkında bilgi verir misin?'){
        message.channel.send(`**${RandomCat.Name}**\n${RandomCat.Info}`)
        }
    })

```

 > ## İki sayı arasından rastgele birini seçmek

```js
var RandomNumber = Math.floor(Math.random() * 10) + 0;
```

*Burda 10-0 arasında bir sayı seçiyoruz. **En yüksek değer önce**, **en düşük değer sonra** yazılır.*

![RandomNumber](https://user-images.githubusercontent.com/80279532/134231422-54f8c1e4-f16c-4089-b2bb-369a0b74d4c5.png)


  ```js
client.on('message', message => {
  
  var RandomNumber = Math.floor(Math.random() * 10) + 0;
       
  if(message.content === 'Hey Mob! Beni 10 üzerinden puanlar mısın?'){
       message.channel.send(`Sana verdiğim puan: ${RandomNumber}`)
       }
    })
  ```
  
  ## Fonksyonlar

> ## Kullanıcı

🏷️*Kullanıcılar için olan fonksyonlar ikiye ayrılır, bunlar **message.author** ve **message.member**'dır*

> ### Mesajı gönderen kişi
```js
message.author
  ```
  
> ### Mesajı gönderen ve sunucuda olan kişi.
```js
message.member
  ```

message.author | message.member | Sonuç
------------ | ------------ | ------------
message.author.username | message.member.user.username | Rahuna
message.author.discriminator | message.member.user.discriminator | 3434
message.author.tag | message.member.user.tag | Rahuna#3434
❌ | message.member.displayName | Selam ben Kiraz🍒
message.author.id | message.member.id | 528118080706969600
message.author.displayAvatarURL() | message.member.displayAvatarURL() | <img src="https://media.pocketgamer.biz/2021/5/110514/discord-new-logo-2021-r225x.jpg" width="48">
