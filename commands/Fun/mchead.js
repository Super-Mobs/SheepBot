exports.run = (client, msg, [username]) => {
  const args = username;
   const embed = new client.methods.Embed()
       .setColor('0fa511')
       .setAuthor(`${args}`, ``)
       .setImage(`https://crafatar.com/renders/head/${args}`)
       msg.channel.send({embed});
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
  name: "mchead",
  description: "Finds the minecraft head of a user.",
  usage: "<username:string>",
  usageDelim: "",
  type: "commands",
};
