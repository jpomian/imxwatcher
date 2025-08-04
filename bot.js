import fs from 'fs';
import TelegramBot from 'node-telegram-bot-api';
import processData from './fetch.js';

const token = process.env.TG_RQ_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const records = 'latest.json'
const msRefresh = 60000;

console.log('Session started.');

let g_state = {
    lastRecords: [],
    lastCheck: null
};

let iTime = 0;

try {
    const savedState = fs.readFileSync(records, 'utf8');
    g_state = JSON.parse(savedState);
    console.log('Loaded previous g_state');
} catch (err) {
    console.log('No previous g_state found, starting fresh');
    saveState();
}

function saveState() {
    fs.writeFileSync(records, JSON.stringify(g_state), 'utf8');
}

function findNewRecords(currentData) {
    if (!Array.isArray(currentData)) {
        console.log('API response is not an array');
        return [];
    }

    if (g_state.lastRecords.length === 0) {
        g_state.lastRecords = currentData;
        saveState();
        return [];
    }

    const newRecords = currentData.filter(currentRecord =>
        !g_state.lastRecords.some(lastRecord =>
            JSON.stringify(lastRecord) === JSON.stringify(currentRecord)
        )
    );

    g_state.lastRecords = currentData;
    g_state.lastCheck = new Date().toISOString();
    saveState();

    return newRecords;
}

// bot messages

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

async function sendNotification(record) {
    try {
        await bot.sendMessage(msg.chat.id, record, { parse_mode: 'Markdown' });
        console.log('Posted another offer');
    } catch (error) {
        console.error('Error sending Telegram message:', error.message);
    }
}

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

async function monitorApi() {
    iTime++;
    console.log(`Starting API monitor (checking every ${msRefresh / 1000} seconds)`);

    setInterval(async () => {
        console.log(`Check no. ${iTime}: ${new Date().toLocaleString()}`);

        const currentData = await processData();
        if (currentData) {
            const newRecords = findNewRecords(currentData);

            if (newRecords.length > 0) {
                console.log(`Found ${newRecords.length} new listings.`);
                for (const record of newRecords) {
                    await sendNotification(record);
                }
            } else {
                console.log('No listings found');
            }
        }
    }, msRefresh);
}

monitorApi();

// Handle process termination
process.on('SIGINT', () => {
  console.log('Saving state before exiting...');
  saveState();
  process.exit();
});