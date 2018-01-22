exports.run = (client, msg) => {
if (msg.guild.settings.modlog) {
			const embed = new client.methods.Embed()
				.setColor(0xff0000)
				.setTimestamp()
				.setAuthor(`Message in #${msg.channel.name} has been deleted!`)
				.addField('Message:', msg.content)
				.addField('Message Author:', msg.author)
				.setFooter('Deleted Message');
			client.channels.get(msg.guild.settings.modlog).send({ embed });
		}
  };
