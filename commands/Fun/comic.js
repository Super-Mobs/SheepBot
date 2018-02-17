const snek = require("snekfetch");
exports.run = async (client, msg) => {
const reply = await msg.channel.send(" <a:loading:393852367751086090> please wait a few moments.");
const inf = await snek.get("https://xkcd.com/info.0.json");
const ob = await inf.body;
  const rn = await  Math.floor((Math.random() * 1955) + 1);
  const ef = await snek.get(`https://xkcd.com/${rn}/info.0.json`);
  const ab = await ef.body;
  if (msg.guild.settings.embeds == true) {
    const embed = new client.methods.Embed()
    .setColor(Math.floor(Math.random() * 16777215))
    .setImage(ab.img)
    .setTitle("XKCD Comics")
    .addField(`${ab.title} | #${ab.num}`, `${ab.alt}`)
    reply.edit({embed});
  } else {

    return reply.edit(ab.img);
  }

}
  exports.conf = {
    enabled: true,
    runIn: ["text", "dm", "group"],
    aliases: ["comic"],
    permLevel: 0,
    botPerms: ["ATTACH_FILES"],
    requiredFuncs: [],
    embed: true,
  };
  
  exports.help = {
    name: "comic",
    description: "Daily Comics.",
    usage: "",
    usageDelim: "",
  };
  
