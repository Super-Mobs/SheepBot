exports.run = async (client, msg) => {
  msg.channel.send("Ping?  Wait...that's your job!")
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "pong",
  description: "Pong?",
  usage: "",
  usageDelim: "",
};
