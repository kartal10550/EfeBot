const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Efe - Bot Yeniden Sizlerle.")
.setTitle("<a:sunglasses:811243695076540456> Efe - Bot Kullanıcı Komutları :hearts:")
 .setTimestamp()
.setDescription(":point_right: **e!avatar** = Avatarınıza bakarsınız.  \n :point_right: **e!yetkilerim** = Yetkilerini görürsün.  \n :point_right: **e!profil** = Profilini görürsün.  \n :point_right: **e!sunucuresmi** = Sunucu resmini gösterir.  \n :point_right: **e!ping** = Botun Pingine Bakarsın.  \n :point_right: **e!id** = Birisinin id'sine Bakarsın.  \n :point_right: **e!davet** = Beni Sunucuna Ekle.  \n :point_right: **e!botbilgi** = Bot istatistiklerini görürsünüz.  \n :point_right: **e!bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir.")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}