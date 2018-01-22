exports.run = (client, msg) => {
  let guild = msg.guild
  let users = guild.members.random()
  msg.channel.send(`${users}`);
};
exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 3,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};
exports.help = {
  name: "randomuser",
  description: "Picks a random user.",
  usage: "",
  usageDelim: "",
  type: "commands",
};
