exports.run = (client, role) => {
if (role.guild.settings.modlog) {
			const embed = new client.methods.Embed()
				.setColor(0x33ff00)
				.setTimestamp()
				.setAuthor(`The role has been added!`)
        .addField('Role:', role.name)
        .addField('ID:', role.id)
			client.channels.get(role.guild.settings.modlog).send({ embed });
		}
  };
