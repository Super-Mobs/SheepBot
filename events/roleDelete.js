exports.run = (client, role) => {
if (role.guild.settings.modlog) {
			const embed = new client.methods.Embed()
				.setColor(0xff0000)
				.setTimestamp()
				.setAuthor(`A role has been removed!`)
        .addField('Role:', role.name)
        .addField('ID:', role.id)
        .setFooter('Deleted Role');
			client.channels.get(role.guild.settings.modlog).send({ embed });
		}
  };
