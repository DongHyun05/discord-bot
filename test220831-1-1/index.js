// 필요한 discord.js Class 불러오기
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const { token } = require('./config.json');

// 새 클라이언트 인스턴스 만들기
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// 클라이언트가 준비되면 이 코드를 실행합니다(한 번만).
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === '핑') {
		await interaction.reply('퐁!');
	} else if (commandName === '서버') {
		await interaction.reply(`서버 이름: ${interaction.guild.name}\n총 인원: ${interaction.guild.memberCount}`);
	} else if (commandName === '봇') {
		await interaction.reply(`${client.user.displayAvatarURL()}`);
	} else if (commandName === '유저') {
		await interaction.reply(`프로필: ${interaction.user.displayAvatarURL()}\n태그: ||${interaction.user.tag}||\n아이디: ||${interaction.user.id}||`);
	} 
});

// 봇의 토큰으로 Discord에 로그인하세요.
client.login(token);