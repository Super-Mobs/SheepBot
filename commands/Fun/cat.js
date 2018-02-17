const snek = require("snekfetch");
exports.run = async (client, msg) => {
  const reply = await msg.channel.send(" <a:loading:393852367751086090> please wait a few moments.");
  const { body: { file } } = await snek.get("http://random.cat/meow");
  if (msg.guild.settings.embeds == true) {
    const embed = new client.methods.Embed()
    .setColor(Math.floor(Math.random() * 16777215))
    .setImage(file)
    .setTitle("Cats")
    reply.edit({embed});
    } else 
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
  embed: true,
};

exports.help = {
  name: "cat",
  description: "Gathers a cat image from random.cat website",
  usage: "",
  usageDelim: "",
};