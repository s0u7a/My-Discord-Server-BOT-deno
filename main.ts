import { createBot, Intents, startBot } from "./deps.ts"
import { Secret } from "./secret.ts"

const bot = createBot({
    token: Secret.DISCORD_TOKEN,
    intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
    events: {
        ready: (_bot, payload) => {
            console.log(`${payload.user.username} is ready!`)
        },
    },
})

bot.events.messageCreate = (b, message) => {
    if (message.content === "!neko") {
        b.helpers.sendMessage(message.channelId, {
            content: "にゃーん",
        })
    }
}
bot.events.messageCreate = (b, message) => {
    if (message.content === "!Callminto") {
        b.helpers.sendMessage(message.channelId, {
            content: "<@612479046919520275>",
        })
    }
}

await startBot(bot)