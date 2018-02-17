const request = require("snekfetch");
const HTMLParser = require("fast-html-parser");
exports.run = async (client, msg) => {
    const reply = await msg.channel.send(" <a:loading:393852367751086090> please wait a few moments.");
    const { text } = await request.get("http://www.fmylife.com/random");
    const root = HTMLParser.parse(text);
    const article = root.querySelector(".block a");
    const downdoot = root.querySelector(".vote-down");
    const updoot = root.querySelector(".vote-up");
    if (msg.guild.settings.embeds == true) {
    const embed = new client.methods.Embed()
      .setTitle("Fuck my Life!")
      .setColor(Math.floor(Math.random() * 16777215))
      .setThumbnail("http://i.imgur.com/5cMj0fw.png")
      .setFooter(`Requested by: ${msg.member.displayName}`)
      .setDescription(`_${article.childNodes[0].text}\n\n_`)
      .addField("I agree, your life sucks", updoot.childNodes[0].text, true)
      .addField("You deserved it:", downdoot.childNodes[0].text, true);
      reply.edit({embed});
    } else {
      reply.edit(`_${article.childNodes[0].text}\n\n_`)
    }

    };
  
  exports.conf = {
    enabled: true,
    runIn: ["text", "dm", "group"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
    embed: true,
  };
  
  exports.help = {
    name: "fml",
    description: "Replies with a Fuck My Life Responce.",
    usage: "",
    usageDelim: "",
  };
  