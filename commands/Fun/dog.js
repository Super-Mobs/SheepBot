const snek = require("snekfetch");

exports.run = async (client, msg) => {
  const reply = await msg.channel.send(" <a:loading:393852367751086090> please wait a few moments.");
  const { body: { message } } = await snek.get("https://dog.ceo/api/breeds/image/random");
  if (msg.guild.settings.embeds == true) {
    const embed = new client.methods.Embed()
    .setColor(Math.floor(Math.random() * 16777215))
    .setImage(message)
    .setTitle("Dogs")
    reply.edit({embed});
  } else  
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
  embed: true,
};

exports.help = {
  name: "dog",
  description: "Gathers a dog image from random.dog website",
  usage: "",
  usageDelim: "",
};