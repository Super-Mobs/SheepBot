const MIN_MEMBERS = 2; // Minimum amount of MEMBERS that must be in a guild.
const BOT_RATIO = 60; // The percentage of Members that are Bots in a guild must be less than this.

exports.run = async (client, guild) => {
  if (guild.memberCount < MIN_MEMBERS || guild.members.filter(u => u.user.bot).size * 100 / guild.memberCount >= BOT_RATIO) {
    await guild.owner.send(`I have left your server \`${guild.name}\` because it looks like a bot farm, or a server with only me and you.`).catch(() => null);
    guild.leave();
    client.emit('verbose', `Left server that didn't meet Anti-Botfarm requirements. (${guild.id})`);
  }
};