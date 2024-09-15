const TelegramBot = require("7205786741:AAHeuUgl7C0KyrLT04650x9aLqq18l0IObA");

// Replace with your actual token from BotFather
const token = "7205786741:AAHeuUgl7C0KyrLT04650x9aLqq18l0IObA";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Create a custom welcome message
  const welcomeMessage = `
  Welcome to SATOSHI FARMS! 🌾
  Start earning crypto while playing our game.
  
  Here are some useful links:
  - 🔗 [Play Now](https://t.me/SATOSHI_FARMS_BOT/Satoshi_Farms)
  - 📺 [Join our Telegram Channel](https://t.me/satoshifarms)
  
  Enjoy your experience! 🚀
  `;

  // Define reply options with a 'Play' and 'YouTube' button
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play Now",
            url: "https://t.me/SATOSHI_FARMS_BOT/Satoshi_Farms",
          },
          { text: "Telegram-channel", url: "https://t.me/satoshifarms" },
        ],
      ],
    },
    parse_mode: "Markdown",
  };

  // Send the welcome message
  bot.sendMessage(chatId, welcomeMessage, options);
});

console.log("Bot is running...");
