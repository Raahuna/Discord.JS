# DISCORD JS ANLATIM ŞEYSİ 🤓

## Emojiler & Tepkiler

> ### Emoji eklemek
```
message.guild.emojis
  .create('emoji_link', 'emoji_name')
  ```
  
  *Bu şekilde kullanılır **emoji_link** yerine bir emoji linki ve **emoji_name** yerinede eklenecek emojinin isimini yazınız.*
  
📌  *NOT: Emoji linkleri şu şekildedir => **https://cdn.discordapp.com/emojis/751979651340959774.png?v=1***

![get_emoji_link](https://cdn.discordapp.com/attachments/833692291230072872/855119180868747324/Ekran_goruntusu_2021-06-17_191752.png)

- **Bunu kopyalamak için bir emojiye **sağ** tıklayıp "Bağlantıyı Kopyala" seçeneğine tıklayınız.**

![add_emoji](https://user-images.githubusercontent.com/80279532/122451759-2e6d2d00-cfb1-11eb-865b-814b907ada07.png)

```
client.on('message', message => {
    if (message.content === 'Hey Natez! Bu sunucuya güzel bir emoji ekler misin?') {
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
  
![reactions](https://cdn.discordapp.com/attachments/833692291230072872/855144897002602566/Ekran_goruntusu_2021-06-17_210020.png)

```
client.on('message', message => {
    if (message.content === 'Hey Natez! Bu mesaja tepki ekler misin?') {
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
  var cat = [
   "Pofuduk Kedi",
   "Şişman Kedi",
   "Vahşi Kedi",
  ];
  
  var cat_name = cat[Math.floor(Math.random(1) * cat.length)]
  ```
  *Yukarıda yazılan **"cat"** isimli kategori oluşturduktan sonra içine **"Pofuduk Kedi"**, **"Şişman Kedi"** ve **"Vahşi Kedi"** elemanlarını ekledik.*
  
![cat_random](https://cdn.discordapp.com/attachments/833692291230072872/855399272214954054/Ekran_goruntusu_2021-06-18_134743.png)

```
client.on('message', message => {
    var cat = [
        "Pofuduk Kedi",
        "Şişman Kedi",
        "Vahşi Kedi",
       ];
       
       var cat_name = cat[Math.floor(Math.random(1) * cat.length)]

       if(message.content === 'Hey Natez! Sence ben nasıl bir kedi severim?'){
       message.channel.send(`${cat_name}`)
       }
       if(message.content === 'Tekrar denemek ister misin?') {
       message.channel.send(`${cat_name}`)
       }
})
```
  ### Seçime göre değişiklik yapmak
  
  ``` 
         var cat_name = cat[Math.floor(Math.random(1) * cat.length)]
         
         if(cat_name === 'Pofuduk Kedi') { var cat_info = 'Scottish fold kedilerin erkekleri genellikle 4-6, dişileri ise 2,7-4 kilo ağırlıktadır. Tüyleri kısadır, ancak Scottish fold longhair isimli uzun tüylü bir türü de vardır. Tüyleri çok çeşitli renklerde olabilir. Bu ırkta görülen tüy renkleri arasında tekir, tekir-beyaz, iki renkli, krem, duman, portakal sayılabilir.' }
       if(cat_name === 'Şişman Kedi') { var cat_info = 'Hey şişman kedi diye bir tür yoktur bunu sen uydurdun!' }
       if(cat_name === 'Vahşi Kedi') { var cat_info = 'Yetişkin bir aslanın ısırığı, herhangi bir ev kedisinin ısırığından 30 kat daha güçlüdür. Aslanlar hayatı boyunca ortalama 3.000 kez çiftleşir. Bir aslan 3 metre boya kadar ulaşabilir. Aslanlar, her gün en az 10 saat uyumaktadır' }

  ```
  **Daha önce **cat_name** olarak tanıttığımız kodun altına if() ler ile olacakları yazdık. If en önemli kodlardan biridir, şu anda kullandığımız kod kediyi seçmesini ardından hangi kedi çıkarsa **cat_info** olarak tanıttığımız yazıda değişiklik yapmasını sağladık.*
  
  ![cat_info](https://cdn.discordapp.com/attachments/833692291230072872/857141423770173460/unknown.png)
  
  ```
  client.on('message', message => {
    var cat = [
        "Pofuduk Kedi",
        "Şişman Kedi",
        "Vahşi Kedi",
       ];
       
       var cat_name = cat[Math.floor(Math.random(1) * cat.length)]

       if(cat_name === 'Pofuduk Kedi') { var cat_info = 'Scottish fold kedilerin erkekleri genellikle 4-6, dişileri ise 2,7-4 kilo ağırlıktadır. Tüyleri kısadır, ancak Scottish fold longhair isimli uzun tüylü bir türü de vardır. Tüyleri çok çeşitli renklerde olabilir. Bu ırkta görülen tüy renkleri arasında tekir, tekir-beyaz, iki renkli, krem, duman, portakal sayılabilir.' }
       if(cat_name === 'Şişman Kedi') { var cat_info = 'Hey şişman kedi diye bir tür yoktur bunu sen uydurdun!' }
       if(cat_name === 'Vahşi Kedi') { var cat_info = 'Yetişkin bir aslanın ısırığı, herhangi bir ev kedisinin ısırığından 30 kat daha güçlüdür. Aslanlar hayatı boyunca ortalama 3.000 kez çiftleşir. Bir aslan 3 metre boya kadar ulaşabilir. Aslanlar, her gün en az 10 saat uyumaktadır' }

       if(message.content === 'Hey Natez! Bir kedi hakkında bilgi verir misin?'){
       message.channel.send(`**${cat_name}**\n${cat_info}`)
       }
       if(message.content === 'Teşekkürler, bir tane daha kedi hakkında bilgi verir misin?'){
        message.channel.send(`**${cat_name}**\n${cat_info}`)
        }
    })
  ```
  
  📌  *NOT: Az önceki kodda kullandığımız \n satır atlamaya yarar. **"ctrl + alt + \*"** ile ters slash (\) koyabilirsiniz. Diğer kesme işaretleri içinde (**"** veya **'**) içinde satır atlayamazsınız. İtediğiniz gibi yazabilmeniz için **"ctrl + alt + , + space"** içine yazarakta bunu yapabilirsiniz. Ayrıca tanıttıktan sonra onu kullanmak için yazdığımız **${}** sadece **\`** içerisinde iken çalışır.*
  
  
