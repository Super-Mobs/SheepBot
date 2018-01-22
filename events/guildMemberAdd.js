exports.run = (client, member) => {
if (member.guild.settings.modlog) {
			const embed = new client.methods.Embed()
				.setColor(0x00AE86)
				.setAuthor(`${member.user.username} #${member.user.discriminator} [${member.user.id}]`, member.user.avatarURL())
				.setTimestamp()
				.setFooter('Joined', client.user.avatarURL());
			client.channels.get(member.guild.settings.modlog).send({ embed });
		}
if (member.guild.settings.welcomemsgchannel) {
		client.channels.get(member.guild.settings.welcomemsgchannel).send(`Welcome ${member.user.username} to ${member.guild}`);	
	}		
};