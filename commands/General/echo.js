exports.run = async (client, msg, [message]) => {
  msg.channel.send(`${message}`)
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "echo",
  description: "Repeats what you say!",
  usage: "<message:str>",
  usageDelim: "",
};
