const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Snax Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("<a:f1:637967475530530816>| s!seviye : Kullanım : s!seviye ","Seviyr Bakmak İçin Bu Kodu Yaza bilirsin")
.addField("<a:f1:637967475530530816>| s!seviye renk : Kullanım : s!seviye-renk #00ff00","Renk Kodlarına Gore Değiştire Bilirsiniz")
.addField("<a:f1:637967475530530816>| s!seviye resim : Kullanımı s!seviye resim resimlink ", "Seviyenin Resmini Değiştirir **Sunucuda**")
.addField("<a:f1:637967475530530816>| s!seviye saydamlaştır : Kullanım : s!seviye saydamlaştır 5 ", "Seviye Resim Saydamlaştırır")
.addField("<a:f1:637967475530530816>| s!seviye ödül : Kullanım : s!seviye ödül @rol ", "Sunucunda 100 Level Ulaştığında Ona Otomatik Rol Verir")
.addField("<a:f1:637967475530530816>| Uyarı |<a:f1:637967475530530816>", "Botun Rolü En Üste Olması Şart Yoksa Rol Vermez")



return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'seviye-yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   



