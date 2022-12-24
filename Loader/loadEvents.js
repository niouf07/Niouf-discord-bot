const fs = require("fs");

module.exports = async (bot) => {
  fs.readdirSync("./events")
    .filter((f) => f.split(".")[f.split(".").length - 1] === "js")
    .forEach(async (file) => {
      let event = require(`../events/${file}`);
      bot.on(file.split(".js").join(""), event.bind(null, bot));
      console.log(`Event ${file} chargé`);
    });
};
