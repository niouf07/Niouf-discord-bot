const fs = require("fs");

module.exports = async (bot) => {
  fs.readdirSync("./events")
    .filter((f) => f.split(".")[f.split(".").length - 1] === "js")
    .forEach(async (file) => {
      let event = require(`../events/${file}`);
      if (!event.name || typeof event.name !== "string")
        throw new TypeError(
          `L'événement ${file.split(".")[0]} n'a pas de nom.`
        );
      bot.on(event.name, event.run.bind(null, bot));
      console.log(`événement ${file} bien load`);
    });
};
