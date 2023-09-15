require('dotenv').config();

const bot = require('./core/bot');
const session = require('./core/session');
const stage = require('./scenes');
const i18n = require('./core/i18n')
const startBot = require('./utils/startBot');

bot.use(session);
bot.use(i18n.middleware());
bot.use(stage.middleware());

bot.start(ctx => ctx.scene.enter('start'));

startBot(bot);
