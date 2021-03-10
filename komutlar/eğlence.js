const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Efe - Bot Yeniden Sizlerle.")
.setTitle("<a:sunglasses:811243695076540456> Efe - Bot Eğlence Komutları :hearts: ")
 .setTimestamp()
.setDescription("  :point_right: **e!tersyazı** = Bir Yazıyı Bot Ters Yazar. \n   :point_right: **e!mcskin** = Yazdığınız İsmin Minecraft Görünüşünü Atar. \n   :point_right: **e!fbi** = Bot FBi Gif Atar.  \n :point_right: **e!token** = Tokenimi Öğrenmek İstemezmisin?  \n :point_right: **e!düello** = Düello Atarsın.  \n :point_right: **e!wasted** = Polis tarafından yakalanırsın.  \n :point_right: **e!atatürk** = Dene ve gör... (1881-1938)")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}