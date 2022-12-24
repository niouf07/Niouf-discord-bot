const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({
  intents,
  clientOptions: { intents },
});
const loadCommands = require("./Loader/loadCommands");
const loadEvents = require("./Loader/loadEvents");
const config = require("./config");

bot.commands = new Discord.Collection();

bot.login(config.token);
loadCommands(bot);
loadEvents(bot);

bot.on("messageCreate", async (message) => {
  if (message.content === "n!ping")
    return bot.commands.get("ping").run(bot, message);
});
bot.on("ready", async () => {
  console.log(`${bot.user.tag} est en ligne`);
});
