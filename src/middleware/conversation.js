const { Context } = require('telegraf')
const prisma = require('../core/prisma')

/**
 * To create or find conversation
 * 
 * @param {Context} ctx 
 * @param {function} next 
 */
async function conversation(ctx, next) {
    await ctx.replyWithChatAction('typing')

    if (ctx.session.conversation) {
        return next()
    }

    const chat = ctx.message?.chat || ctx.callbackQuery.message

    let conversation = await prisma.conversation
        .findUnique({
            where: {
                chat_id: chat.id.toString()
            }
        })

    if (conversation) {
        ctx.session.conversation = conversation
        return next()
    }

    conversation = await prisma.conversation.create({
        data: {
            chat_id: chat.id.toString(),
            first_name: chat.first_name,
            last_name: chat.last_name,
        },
    })

    ctx.session.conversation = conversation
    return next()
}

module.exports = conversation