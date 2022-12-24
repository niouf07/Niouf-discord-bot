const Discord = require("discord.js");
const winston = require("winston");
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

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

function handleError(error) {
  logger.log("error", "Une erreur est survenue", {
    details: error.details,
  });
}

// Appel de la fonction en passant une erreur en argument
handleError(new Error("Erreur de test"));
