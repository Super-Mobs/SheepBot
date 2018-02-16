const snek = require("snekfetch");

exports.run = async (client, msg) => {
  const { body: { message } } = await snek.get("https://dog.ceo/api/breeds/image/random");
 // if (msg.guild.settings.embeds == true) {
 //   const embed = new client.methods.Embed()
 //   .setColor(6570406)
 //   .setImage(message)
 //   .setTitle("Dogs")
 //   return msg.channel.send({ embed });
  //} else  
  return msg.channel.sendFile(message);
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["dogo"],
  permLevel: 0,
  botPerms: ["ATTACH_FILES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "dog",
  description: "Gathers a dog image from random.dog website",
  usage: "",
  usageDelim: "",
};