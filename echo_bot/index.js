const { Telegraf } = require('telegraf');

const bot = new Telegraf('7602743597:AAGQTyh-1CgRdmz22XBV0tCQKnfwO2cPrJk');

bot.use(async (ctx) => {
    await ctx.reply(JSON.stringify(ctx.update, null, 2));
});

bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));