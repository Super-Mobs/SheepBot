exports.run = (client, member) => {
if (member.guild.settings.modlog) {
			const embed = new client.methods.Embed()
				.setColor(0xff0000)
				.setAuthor(`${member.user.username} #${member.user.discriminator} [${member.user.id}]`, member.user.avatarURL())
				.setTimestamp()
				.setFooter('Left', client.user.avatarURL());
			client.channels.get(member.guild.settings.modlog).send({ embed });
		}
  };
