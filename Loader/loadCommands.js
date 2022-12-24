const fs = require("fs");

module.exports = async (bot) => {
  fs.readdirSync("./commandes")
    .filter((f) => f.split(".")[f.split(".").length - 1] === "js")
    .forEach(async (file) => {
      let command = require(`../commandes/${file}`);
      if (!command.name || typeof command.name !== "string")
        throw new TypeError(
          `La commande ${file.split(".")[0]} n'a pas de nom.`
        );
      bot.commands.set(command.name, command);
      console.log(`commande ${file} bien load`);
    });
};
