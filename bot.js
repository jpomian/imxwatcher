import TelegramBot from 'node-telegram-bot-api';
import processData from './format.js';

const token = process.env.TG_RQ_TOKEN;
const bot = new TelegramBot(token, { polling: true });

console.log('Session started.');

function formatData(offers) {
    if (typeof offers === 'string' || offers instanceof String) {
        try {
            offers = JSON.parse(offers);
        } catch (e) {
            console.error("Failed to parse offers:", e);
            return "Error: Invalid offers data format";
        }
    }

    if (!Array.isArray(offers)) {
        console.error("Offers is not an array:", typeof offers, offers);
        return "Error: Expected array of offers";
    }

    function emoji(name) {
        name = name.toLowerCase();

        if (name.includes("small")) return "🏠";
        else if (name.includes("medium")) return "🏡";
        else if (name.includes("large")) return "🏘";
        else if (name.includes("stronghold")) return "🏯";
        else if (name.includes("fort")) return "🏰";
        else return "💰"; // Default (treasure/unknown)
    }

    return offers.map(offer => `
${emoji(offer.nft.name)} ${offer.nft.rarity} ${offer.nft.name} (SN #${offer.id}) with _${offer.nft.perk}_ perk got listed ([TokenTrove](${offer.url})) ${offer.created} for *${offer.price} ${offer.currency}*.
  `).join('\n******************************\n')
}


bot.on('message', (msg) => {
    const hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }
});

bot.onText(/\/get/, async (msg) => {
    try {
        const data = await processData();
        const botMsg = formatData(data);

        bot.sendMessage(msg.chat.id, botMsg, { parse_mode: 'Markdown' });
    } catch (error) {
        console.error('Error:', error);
        bot.sendMessage(msg.chat.id, `An error occurred: ${error.message}`);
    }
});