const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Efe - Bot Yeniden Sizlerle.")
.setTitle("<a:sunglasses:811243695076540456> Efe - Bot'un Yardım Komutları :hearts:")
 .setTimestamp()
.setDescription(":point_right: **e!eğlence** = Eğlence komutlarını görüntülersiniz.\n :point_right: **e!moderasyon** = Moderasyon komutlarını görüntülersiniz.\n :point_right: **e!kullanıcı** = Kullanıcı komutlarını görüntülersiniz.\n :point_right: **e!logo** = Logo komutlarını görüntülersiniz.")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}