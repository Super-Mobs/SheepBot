exports.run = (client, msg, [username]) => {
  const args = username;
  if (msg.guild.settings.embeds == true) {
 const embed = new client.methods.Embed()
       .setColor('0fa511')
       .setAuthor(`${args}`, ``)
       .setImage(`https://crafatar.com/renders/body/${args}`)
  msg.channel.send({embed});
  } else {
    msg.channel.send(`https://crafatar.com/renders/body/${args}`)
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
