const request = require("snekfetch");
const HTMLParser = require("fast-html-parser");
exports.run = async (client, msg) => {
    const reply = await msg.channel.send("**Searching** please wait a few moments.");
    const { text } = await request.get("http://www.fmylife.com/random");
    const root = HTMLParser.parse(text);
    const article = root.querySelector(".block a");
    const downdoot = root.querySelector(".vote-down");
    const updoot = root.querySelector(".vote-up");
    const embed = new client.methods.Embed()
      .setTitle("Fuck my Life!")
      .setColor(165868)
      .setThumbnail("http://i.imgur.com/5cMj0fw.png")
      .setFooter(`Requested by: ${msg.member.displayName}`)
      .setDescription(`_${article.childNodes[0].text}\n\n_`)
      .addField("I agree, your life sucks", updoot.childNodes[0].text, true)
      .addField("You deserved it:", downdoot.childNodes[0].text, true);
      reply.edit({embed});
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
    name: "fml",
    description: "Replies with a Fuck My Life Responce.",
    usage: "",
    usageDelim: "",
  };
  