const { Permissions } = require("discord.js");

exports.run = (client, msg, cmd) => {
    if (msg.guild.settings.embeds == true) {
        if(msg.channel.permissionsFor(client.user).has("EMBED_LINKS")!== true) {
            return "Error, missing permission to send embeds. Please update permissions or disable embeds in config.";
        } 
    } 
};
exports.conf = {
    enabled: true,
    requiredModules: [],
  };
  
  exports.help = {
    name: "Embeds",
    type: "inhibitors",
    description: "Handles embed settings.",
  };