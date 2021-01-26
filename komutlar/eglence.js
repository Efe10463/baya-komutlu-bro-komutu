const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Snax Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("<a:f1:637967475530530816>| s!adamol : Kullanım : s!adamol","Seni Profil Fotograf Resme Koyar ")
.addField("<a:f1:637967475530530816>| s!balıktut : Kullanım : s!balıktut","Balık Tutarsın")
.addField("<a:f1:637967475530530816>| s!kralol : Kullanımı s!kralol ", "Gif Atar")
.addField("<a:f1:637967475530530816>| s!yılbaşı : Kullanım : s!yılbaşı", "Yıl Başına Kaç Gün Kaldını Gosterir")
.addField("<a:f1:637967475530530816>| s!atasözü : Kullanım : s!atasözü", "Atasöz Atar")
.addField("<a:f1:637967475530530816>| s!sayı-tahmin : Kullanım : s!sayı-tahmin", "Sayı Tahmini Bot Sayı Tutar Sizde Bilme Çalışırsınız")
.addField("<a:f1:637967475530530816>| s!şifre : Kullanım : s!şifre 10","Bir Sayı Uzunlu Girersin Ve O Sana Güvenli Şifre Oluşturur")
.addField("<a:f1:637967475530530816>| s!hangi-hayvansın : Kullanım : s!hangi-hayvansın", "Hangi Hayvan Oldunu Gosterir **Şaka Amaçlıdır**")
.addField("<a:f1:637967475530530816>| s!emojiyazı : Kullanım : s!emojiyazı Snax", "Emoji Yazı Oluşturur")

return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'eglence',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   



