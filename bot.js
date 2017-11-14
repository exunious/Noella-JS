const Eris = require("eris");

// Replace BOT_TOKEN with your bot account's token
var bot = new Eris.CommandClient("MzU3ODUyODQ5MDI5NTEzMjE2.DOvVow.R3dFDAmREJL2SeZoK0vGVR19xAk", {}, {
    description: "A test bot made with Eris",
    owner: "somebody",
    prefix: "!"
});

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.registerCommand("ping", "Pong!", { // Make a ping command
// Responds with "Pong!" when someone says "!ping"
    description: "Pong!",
    fullDescription: "This command could be used to check if the bot is up. Or entertainment when you're bored.",
    reactionButtons: [ // Add reaction buttons to the command
        {
            emoji: "⬅",
            type: "edit",
            response: (msg) => { // Reverse the message content
                return msg.content.split().reverse().join();
            }
        },
        {
            emoji: "🔁",
            type: "edit", // Pick a new pong variation
            response: ["Pang!", "Peng!", "Ping!", "Pong!", "Pung!"]
        }
    ],
    reactionButtonTimeout: 30000 // After 30 seconds, the buttons won't work anymore
});

bot.connect();