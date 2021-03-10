const  Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('<a:sunglasses:816708209846517781> İstatistik;')
    .addField('<a:point_right:816708077591855104> Gecikme: ', client.ws.ping + 'ms')
    .addField('<a:point_right:816708077591855104> Çalışma Süresi: ', `${duration}`)
    .addField('<a:point_right:816708077591855104> Kullanıcılar:', client.users.cache.size)
    .addField('<a:point_right:816708077591855104> Kanallar:', client.channels.cache.size)
    .addField('<a:point_right:816708077591855104> Sunucular:', client.guilds.cache.size)
    .addField('<a:point_right:816708077591855104> Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField('<a:point_right:816708077591855104> Kütüphanesi;', `Discord.js`)
    .addField('<a:point_right:816708077591855104> Discord.js sürümü:', Discord.version)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi','i'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};