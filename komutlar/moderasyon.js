const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Efe - Bot Yeniden Sizlerle.")
.setTitle("<a:sunglasses:811243695076540456> Efe - Bot Moderasyon Komutları :hearts:")
 .setTimestamp()
.setDescription("<a:point_right:750065080741134407> **e!sil** = Yazdığınız miktarda mesajı siler.  \n <a:point_right:750065080741134407> **e!ban** = Etiketlediğiniz kişiyi banlarsınız.  \n <a:point_right:750065080741134407> **e!kick** = Etiketlediğiniz kişiyi atarsınız.  \n <a:point_right:750065080741134407> **e!duyuru** = Bota duyuru yaptırırsınız.  \n <a:point_right:750065080741134407> **e!küfür** = Küfür engel sistemini açarsınız.  \n <a:point_right:750065080741134407> **e!reklam** = Reklam engel sistemi açarsınız.  \n <a:point_right:750065080741134407> **e!slowmode** = Yavaş modu ayarlarsınız.  \n <a:point_right:750065080741134407> **e!forceban** = Birisine id ban atarsınız.  \n <a:point_right:750065080741134407> **e!unban** = Birisinin banını açarsınız.  \n <a:point_right:750065080741134407> **e!sa-as** = Bot biri sa dedimi cevap verir.  \n <a:point_right:750065080741134407> **e!sunucubilgi** = Sunucu bilgilerini görürsün.  \n <a:point_right:750065080741134407> **e!üyedurum** = Üyelerin durumlarını görürsün.  \n <a:point_right:750065080741134407> **e!çekiliş** = Çekiliş başlatırsınız. ")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}