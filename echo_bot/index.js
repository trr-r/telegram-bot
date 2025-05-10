// Бот, который будет отвечать нашим же сообщением. 
// Но не текстом, а так, как его видит бот, в JSON формате, со всеми полями, которые даёт ему Telegram.
const { Telegraf } = require('telegraf');

const bot = new Telegraf('7602743597:AAGQTyh-1CgRdmz22XBV0tCQKnfwO2cPrJk');

const middleware1 = (ctx, next) => {
    console.log('middleware1');
    next();
};
const middleware2 = (ctx, next) => {
    console.log('middleware2');
};
const middleware3 = (ctx, next) => {
    console.log('middleware3');
};

bot.use(middleware1);
bot.use(middleware2);
bot.use(middleware3);

bot.launch().then(() => console.log('Started'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));