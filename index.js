require('dotenv').config()
const {Client, GatewayIntentBits, Partials } = require('discord.js')
const client = new Client({
  intents:  [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildVoiceStates],
  partials: [Partials.Channel, Partials.Message, Partials.Reaction]
})

/**
 * 起動時
 */
client.on('ready', async () => {
  console.log(`${client.user.tag} でログインしています。`)
})

/**
 * メッセージ受信時
 */
client.on('messageCreate', async (message) => {
  const content = message.content
  console.log(`メッセージ受信: ${content}`)
})

/**
 * インタラクション作成時
 */
client.on('interactionCreate', async (interaction) => {
})

/**
 * リアクション追加／削除時
 */
client.on('messageReactionAdd', async (reaction, user) => {
})

/**
 * ステージ作成時
 */
client.on('stageInstanceCreate', async (stage) => {
})

// Discordに接続
client.login(process.env.DISCORD_BOT_TOKEN)
