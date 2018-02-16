const snek = require("snekfetch");

exports.run = async (client, msg) => {
  const { body: { file } } = await snek.get("http://random.cat/meow");
//  if (msg.guild.settings.embeds == true) {
//    const embed = new client.methods.Embed()
///    .setColor(6570406)
//    .setImage(file)
//    .setTitle("Cats")
//    return msg.channel.send({ embed });
//  } else 
  return msg.channel.sendFile(file, `cat.${file.split(".")[2]}`);
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["kitten"],
  permLevel: 0,
  botPerms: ["ATTACH_FILES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "cat",
  description: "Gathers a cat image from random.cat website",
  usage: "",
  usageDelim: "",
};