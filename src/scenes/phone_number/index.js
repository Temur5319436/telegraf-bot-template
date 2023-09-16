const { Scenes } = require('telegraf')

const scene = new Scenes.BaseScene('phone_number')

scene.enter(async (ctx) => {
    const fullName = ctx.session?.data?.full_name

    await ctx.reply(ctx.i18n.t('phone-number.enter', { full_name: fullName }), {
        reply_markup: {
            keyboard: [
                [{ text: ctx.i18n.t('buttons.phone-number'), request_contact: true }]
            ],
            resize_keyboard: true
        }
    })
})

scene.on('contact', async (ctx) => {
    ctx.session.data.phone_number = ctx.message.contact.phone_number

    const { full_name, phone_number } = ctx.session.data

    await ctx.reply(ctx.i18n.t('info', {
        full_name,
        phone_number,
    }), {
        reply_markup: {
            remove_keyboard: true,
        },
        parse_mode: 'MarkdownV2'
    })

})

module.exports = scene
