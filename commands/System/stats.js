const { version: discordVersion } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const { version: komadaVersion } = require("komada");

exports.run = async (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  if (msg.guild.settings.embeds == true) {
    const embed = new client.methods.Embed()
    .setColor(6570406)
    .setThumbnail(client.user.avatarURL())
    .setTitle("Sheep Bot Statistics")
    .addField("Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField("Uptime", `${duration}`, true)
    .addField("Users", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField("Servers", `${client.guilds.size.toLocaleString()}`, true)
    .addField("Channels", `${client.channels.size.toLocaleString()}`, true)
    .addField("Komada", `v${komadaVersion}`, true)
    .addField("Discord.js", `v${discordVersion}`, true)
    .addField("Node.js", `${process.version}`, true)
    return msg.channel.send({ embed });
  } else 
  return msg.sendCode("asciidoc", [
    "= STATISTICS =",
    "",
    `• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
    `• Uptime     :: ${duration}`,
    `• Users      :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
    `• Servers    :: ${client.guilds.size.toLocaleString()}`,
    `• Channels   :: ${client.channels.size.toLocaleString()}`,
    `• Komada     :: v${komadaVersion}`,
    `• Discord.js :: v${discordVersion}`,
    `• Node.js    :: ${process.version}`,
  ]);
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["details", "what"],
  permLevel: 0,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "stats",
  description: "Provides some details about the bot and stats.",
  usage: "",
  usageDelim: "",
};
