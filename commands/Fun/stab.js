exports.run = (client, msg, [member]) => {
  const args = member;
 msg.reply(`has stabbed ${args}`);
 };
exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};
exports.help = {
  name: "stab",
  description: "You are wanted. Hide the body, or run.",
  usage: "<member:member>",
  usageDelim: "",
  type: "commands",
};
