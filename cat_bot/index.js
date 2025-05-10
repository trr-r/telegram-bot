const {Telegraf} = require('telegraf');

const bot = new Telegraf('7684742420:AAE1UxIean0K_r57LScrXFSYFsXhlwBu61c');

const chatId = 223511938;//замените на свое значение, подробнее ниже
const intervalMs = 1800000;
const getCatUrl = () => `https://cataas.com/cat?t=${new Date().getTime()}`;

const sendCat = () => {
    bot.telegram.sendPhoto(chatId, getCatUrl()).then(() => setTimeout(sendCat, intervalMs));
}

sendCat();