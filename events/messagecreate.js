const Discord = require("discord.js");

module.exports = async (bot, message) => {
  let prefix = "!";
  let messageArray = message.content.split(" ");
  let commandName = messageArray[0].slice(prefix.length);
  let args = messageArray.slice(1);
  if (!message.content.startsWith(prefix)) return;
  let command = bot.commands.get(commandName);
  if (!command) return message.reply("La commande n'éxiste pas");
  command.run(bot, message, args);
};
