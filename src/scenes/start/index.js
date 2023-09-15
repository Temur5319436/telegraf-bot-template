const { Scenes } = require("telegraf");

const scene = new Scenes.BaseScene('start');

scene.enter(async (ctx) => {
    ctx.i18n.locale('uz')

    await ctx.reply(ctx.i18n.t('hi', { full_name: ctx.from.first_name }), {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'UZ', callback_data: 'uz' }],
                [{ text: 'EN', callback_data: 'en' }],
                [{ text: 'RU', callback_data: 'ru' }],
            ]
        }
    });
});


scene.action(/([uz|en|ru])/, async (ctx) => {
    await ctx.answerCbQuery()

    await ctx.deleteMessage()

    await ctx.reply(ctx.i18n.t('start.what-is-your-name'))
})

scene.on('text', (ctx) => {
    ctx.session.data = { full_name: ctx.message.text }

    ctx.scene.enter('phone_number')
})

module.exports = scene;