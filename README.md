# DISCORD JS ANLATIM ŞEYSİ 🤓

## Gömülü Mesaj

> ### Yazar
```
.setAuthor('Name','AvatarURL')
  ```
  
  *Bu şekilde kullanılır, **Name** yerine bir isim ve **AvatarURL** yerinede profil fotoğrafının linkini yazınız.*
  
  > ### Başlık
```
.setTitle('TitleMessage')
  ```
  
  *Bu şekilde kullanılır, **TitleMessage** yerine ne yazarsanız mesaj başlığı o olur.*
  
   > ### Açıklama
```
.setDescription('DescriptionMessage')
  ```
  
  *Bu şekilde kullanılır, **DescriptionMessage** yerine ne yazarsanız mesaj açıklaması o olur.*
  
  > ### Afiş
```
.setImage('ImageURL')
  ```
  
  *Bu şekilde kullanılır, **ImageURL** yerine istediğiniz bir görselin linkini yazınız, en alta o resim eklenir.*
  
  > ### Görsel
```
.setThumbnail('ImageURL')
  ```
  
  *Bu şekilde kullanılır, **ImageURL** yerine istediğiniz bir görselin linkini yazınız sağ üste o resimin küçük hali eklenir.*
  
  > ### Alt yazı
```
.setFooter('FooterMessage','FooterIconURL')
  ```
  
  *Bu şekilde kullanılır, **FooterMessage** yerine istediğiniz bir mesajı, FooterIconURL yazan yere istediğiniz bir fotoğrafın linkini yazınız bu sizin alt yazınızdaki görseliniz ve yazınız olacaktır.*
  
  > ### Renk
```
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

> ### Örnek Embed

```
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

![ExampleEmbed](https://user-images.githubusercontent.com/80279532/134047640-069f77cb-fbb2-4c83-8239-7fcf537eb934.png)

## Emojiler & Tepkiler

> ### Emoji eklemek
```
message.guild.emojis
  .create('emojiLink', 'emojiName')
  ```
  
  *Bu şekilde kullanılır, **emojiLink** yerine bir emoji linki ve **emojiName** yerinede eklenecek emojinin isimini yazınız.*
  
📌  *NOT: Emoji linkleri şu şekildedir => **https://cdn.discordapp.com/emojis/751979651340959774.png?v=1***

![get_emoji_link](https://user-images.githubusercontent.com/80279532/134048745-9777b4fe-bdbb-437a-b588-db7a7692c11d.png)

- **Bunu kopyalamak için bir emojiye **sağ** tıklayıp "Bağlantıyı Kopyala" seçeneğine tıklayınız.**

![AddEmoji](https://user-images.githubusercontent.com/80279532/134047771-9baa432d-ca1e-4a5d-80d5-9e53ff2b8bc4.png)

```
client.on('message', message => {
    if (message.content === 'Hey Mob! Bu sunucuya güzel bir emoji ekler misin?') {
        message.channel.send('Tabiki')
        message.guild.emojis
        .create('https://cdn.discordapp.com/emojis/751979651340959774.png?v=1', 'ZeroDumb')
    }
});
```

> ### Tepki Eklemek
```
      message.react('🍪')
  ```
  
  *Mesajı gönderen kişinin mesajına tepki ekler.*
  
  ```
      .then(function (message) {
            message.react('🍪')
          })
  ```
  
  *Botun mesajına tepki ekler.*
  
![Reactions](https://user-images.githubusercontent.com/80279532/134047886-6d48b259-bfc9-4764-80a8-b4fb11ad5d71.png)

```
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

> ### Yazılanlardan rastgele birini seçmek
  ```
  var CatNames = [
   "Pofuduk Kedi",
   "Şişman Kedi",
   "Vahşi Kedi",
  ];
  
       var RandomCatName = CatNames[Math.floor(Math.random(1) * CatNames.length)]
  ```
  *Yukarıda yazılan **"CatNames"** isimli kategori oluşturduktan sonra içine **"Pofuduk Kedi"**, **"Şişman Kedi"** ve **"Vahşi Kedi"** elemanlarını ekledik.*
  
![CatRandom](https://user-images.githubusercontent.com/80279532/134048021-f7cc38bc-6d60-47c5-a1e5-b07437fcee9e.png)

```
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
  ### Seçime göre değişiklik yapmak
  
  ``` 
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
  **Daha önce **RandomCatName** olarak tanıttığımız kodun altına if() ler ile olacakları yazdık. If en önemli kodlardan biridir, şu anda kullandığımız kod kediyi seçmesini ardından hangi kedi çıkarsa **CatInfo** olarak tanıttığımız yazıda değişiklik yapmasını sağladık.*
  
  ![CatInfo](https://user-images.githubusercontent.com/80279532/134048098-d3d49dc1-5fe1-46e2-aee9-c271b92e1cc2.png)
  
  ```
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
       message.channel.send(`**${cat_name}**\n${cat_info}`)
       }
       if(message.content === 'Teşekkürler, bir tane daha kedi hakkında bilgi verir misin?'){
        message.channel.send(`**${cat_name}**\n${cat_info}`)
        }
    })
  ```
  
  📌  *NOT: Az önceki kodda kullandığımız \n satır atlamaya yarar. **"ctrl + alt + \*"** ile ters slash (\) koyabilirsiniz. Diğer kesme işaretleri içinde (**"** veya **'**) içinde satır atlayamazsınız. İtediğiniz gibi yazabilmeniz için **"ctrl + alt + , + space"** içine yazarakta bunu yapabilirsiniz. Ayrıca tanıttıktan sonra onu kullanmak için yazdığımız **${}** sadece **\`** içerisinde iken çalışır.*
  
    ### Seçime göre değişiklik yapmak (Daha Basit)

```
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
