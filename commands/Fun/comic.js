const snek = require("snekfetch");
exports.run = async (client, msg) => {
const inf = await snek.get("https://xkcd.com/info.0.json");
const ob = await inf.body;
  const rn = await  Math.floor((Math.random() * 1955) + 1);
  const ef = await snek.get(`https://xkcd.com/${rn}/info.0.json`);
  const ab = await ef.body;
  return msg.channel.send({"embed": {"author":{"name":"XKCD Comics"}, "description":`${ab.title} | #${ab.num}\n${ab.alt}`, "image":{"url":ab.img}}});
}
  exports.conf = {
    enabled: true,
    runIn: ["text", "dm", "group"],
    aliases: ["comic"],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
  };
  
  exports.help = {
    name: "comic",
    description: "Daily Comics.",
    usage: "",
    usageDelim: "",
  };
  
