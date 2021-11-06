module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        client.user.setActivity('Hello World!');
        console.log('Bot is ready!');
        console.log(`Running ${client.commands.size} commands | Serving in ${client.guilds.cache.size} guilds`);
    },
};
