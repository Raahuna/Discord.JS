# DISCORD JS ANLATIM ŞEYSİ 🤓

## Emojiler & Tepkiler

> ### Emoji eklemek
```
message.guild.emojis
  .create('emoji_link', 'emoji_name')
  ```
  
  *Bu şekilde kullanılır **emoji_link** yerine bir emoji linki ve **emoji_name** yerinede eklenecek emojinin isimini yazınız.*
  
📌  **NOT: Emoji linkleri şu şekildedir => https://cdn.discordapp.com/emojis/751979651340959774.png?v=1**

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
  
  
  
  
