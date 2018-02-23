exports.run = (client, msg, [username]) => {
  const args = username;
  if (msg.guild.settings.embeds == true) {
 const embed = new client.methods.Embed()
      .setColor(Math.floor(Math.random() * 16777215))
       .setAuthor(`${args}`, ``)
       .setImage(`https://visage.surgeplay.com/full/512/${args}`)
  msg.channel.send({embed});
  } else {
    msg.channel.send(`https://visage.surgeplay.com/full/512/${args}`)
  }
 };
exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: ["ATTACH_FILES"],
  requiredFuncs: [],
  requiredModules: [],
  embed: true,
};
exports.help = {
  name: "mcskin",
  description: "Finds the minecraft skin of a user.",
  usage: "<username:string>",
  usageDelim: "",
  type: "commands",
};
