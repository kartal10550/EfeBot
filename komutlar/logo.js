const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Efe - Bot Yeniden Sizlerle.")
.setTitle("<a:sunglasses:811243695076540456> Efe - Bot Logo Komutları :hearts:")
 .setTimestamp()
.setDescription("<a:point_right:750065080741134407> **e!dinamik** = Dinamik logo oluşturur. \n <a:point_right:750065080741134407> **e!altın** = Altın logo oluşturur. \n <a:point_right:750065080741134407> **e!banner** = Banner logo oluşturur. \n <a:point_right:750065080741134407> **e!basit** = Basit logo oluşturur. \n <a:point_right:750065080741134407> **e!elmas** = Elmas logo oluşturur.  \n <a:point_right:750065080741134407> **e!sarı** = Sarı logo oluşturur.  \n <a:point_right:750065080741134407> **e!neonmavi** = Neon mavi logo oluşturur.  \n <a:point_right:750065080741134407> **e!kalın** = Kalın logo oluşturur.  \n <a:point_right:750065080741134407> **e!anime** = Anime yazı tipinde logo oluşturur.  \n <a:point_right:750065080741134407> **e!habbo** = Habbo yazı tipinde logo oluşturur.  \n <a:point_right:750065080741134407> **e!arrow** = Ok işaretli logo oluşturur.  \n <a:point_right:750065080741134407> **e!green** = Yeşil logo oluşturur.  \n <a:point_right:750065080741134407> **e!alev** = Alevli logo oluşturur.  \n <a:point_right:750065080741134407> **e!red** = Kırmızı logo oluşturur. ")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}