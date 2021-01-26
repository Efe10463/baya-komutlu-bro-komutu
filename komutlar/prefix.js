const db = require('quick.db');

exports.run = (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:red:636287232990248971> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)
  
    if(args[0] === "sıfırla") {
    if(!preffix) {
      message.channel.send(`<a:red:636287232990248971> Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`<a:onay:636287256545722408> Prefix başarıyla sıfırlandı. Mevcut prefix \`s!\``)
    return
  }
  
  if (!args[0])
    return message.channel.send(`<a:red:636287232990248971> Bir prefix girmelisin.`)
  db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(`<a:onay:636287256545722408> Prefix başarıyla \`${args[0]}\` olarak ayarlandı.`)
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix-ayarla'],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix',
    description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
    usage: 'prefix <prefix>'
};