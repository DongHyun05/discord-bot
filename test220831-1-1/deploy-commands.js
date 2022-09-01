const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('핑').setDescription('퐁하고 대답해요!'),
	new SlashCommandBuilder().setName('서버').setDescription('서버 정보를 나타내요!'),
	new SlashCommandBuilder().setName('봇').setDescription('봇에 대해 나타내요!'),
	// new SlashCommandBuilder().setName('봇상세정보').setDescription('봇에 대해 자세히 나타내요!'),
	new SlashCommandBuilder().setName('유저').setDescription('나에 대해 나타내요!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);