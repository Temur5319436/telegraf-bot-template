const { Scenes } = require('telegraf')

const scene = new Scenes.BaseScene('phone_number')

scene.enter(async (ctx) => {
    const fullName = ctx.session?.data?.full_name

    await ctx.reply(`Salom ${fullName}!\n\nTelefon raqamingizni yuboring!`, {
        reply_markup: {
            keyboard: [
                [{ text: 'Send phone number', request_contact: true }]
            ],
            resize_keyboard: true
        }
    })
})

scene.on('contact', async (ctx) => {
    ctx.session.data.phone_number = ctx.message.contact.phone_number

    const { full_name, phone_number } = ctx.session.data

    await ctx.reply(`Your name is ${full_name}\n\nYour phone number is ${phone_number}`)

    await ctx.reply(JSON.stringify(ctx.session.data))
})

module.exports = scene
