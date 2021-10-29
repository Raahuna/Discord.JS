# <img src="https://koya.gg/assets/img/discordjs-logo.png" width="48"> DISCORD JS ANLATIM ŞEYSİ

## Yazılar ve Argümanlar

🏷️*Argümanlar bir yazının ikinci kelimesi veya dördüncü harften sonrası olabilir. Not: Argümanlar için sıfır, bir demektir bununla beraber girilen sayı onun bir fazlasına denk olur.*

### Hızlı kahverengi tilki tembel köpeğin üzerinden atlar.

> ### toLocaleLowerCase()
```js
var text = "HIZLI KAHVERENGI TILKI TEMBEL KÖPEĞIN ÜZERINDEN ATLAR.";

text.toLocaleLowerCase() = "hızlı kahverengi tilki tembel köpeğin üzerinden atlar." //Büyük harfleri küçük harfe çevirir.
```

> ### toUpperCase()
```js
var text = "hızlı kahverengi tilki tembel köpeğin üzerinden atlar.";

text.toUpperCase() = "HIZLI KAHVERENGI TILKI TEMBEL KÖPEĞIN ÜZERINDEN ATLAR." //Küçük harfleri büyük harfe çevirir.
```

> ### split()
```js
var text = "Hızlı kahverengi tilki tembel köpeğin üzerinden atlar."

text.split(" ") = 'Hızlı', 'kahverengi', 'tilki', 'tembel', 'köpeğin', 'üzerinden', 'atlar.' //Cümledeki boşlukları siler ve yeni cümleyi virgül ile ayırarak listeler
text.split("a") = 'Hızlı k', 'hverengi tilki tembel köpeğin üzerinden ', 'tl', 'r.' //Cümledeki a harflerini siler ve yeni cümleyi virgül ile ayırarak listeler

text.split(" ")[5] = "üzerinden" //Cümledeki boşlukları sildikten sonra ayrılan kelimelerden 6. değeri alır. (Cümledeki 6. Kelime)
```

> ### trim()
```js
var text = "     Hızlı kahverengi tilki tembel köpeğin üzerinden atlar.     ";

text.trim() = "Hızlı kahverengi tilki tembel köpeğin üzerinden atlar." //Cümlenin başındaki boşlukları siler.
```

> ### lenght
```js
var text = "Hızlı kahverengi tilki tembel köpeğin üzerinden atlar.";

text.length = 54 //Cümlede kaç karakter olduğunu gösterir.
```

> ### match()
```js
var text = "Hızlı kahverengi tilki tembel köpeğin üzerinden atlar.";

text.match(/a/g).length = 3 //Girilen kelime ya da karakterin cümlede kaç kez geçtiğini gösterir.
text.match(/a/gi) = 'a', 'a', 'a' //Girilen kelime ya da karakterin cümlede nerelerde olduğunu sıralar 
```

> ### slice()

```js
var text = "Hızlı kahverengi tilki tembel köpeğin üzerinden atlar.";

text.slice(0) = "Hızlı kahverengi tilki tembel köpeğin üzerinden atlar." //Cümlenin kendisi
text.slice(23) = "tembel köpeğin üzerinden atlar." //Cümlenin 23. karakteri
text.slice(-16) = "üzerinden atlar." //Cümlenin sondan 16. karakteri
text.slice(0, 5) = "Hızlı" //Cümleyi ilk karakterden başlatır ve beşinci karakterde bitir
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
