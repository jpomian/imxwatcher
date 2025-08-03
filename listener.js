const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const fs = require('fs');

// Configuration
const config = {
  telegramToken: 'YOUR_BOT_TOKEN', // Replace with your bot token
  chatId: 'YOUR_CHAT_ID',         // Replace with your chat ID
  apiUrl: 'YOUR_API_ENDPOINT_URL', // API endpoint to monitor
  checkInterval: 60000,           // 60 seconds between checks
  stateFile: 'bot-state.json'     // File to store last known state
};

// Initialize Telegram bot
const bot = new TelegramBot(config.telegramToken, { polling: false });

// Load or initialize state
let state = {
  lastRecords: [],
  lastCheck: null
};

try {
  const savedState = fs.readFileSync(config.stateFile, 'utf8');
  state = JSON.parse(savedState);
  console.log('Loaded previous state');
} catch (err) {
  console.log('No previous state found, starting fresh');
  saveState();
}

// Helper function to save state
function saveState() {
  fs.writeFileSync(config.stateFile, JSON.stringify(state), 'utf8');
}

// Fetch data from API
async function fetchApiData() {
  try {
    const response = await axios.get(config.apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching API data:', error.message);
    return null;
  }
}

// Compare current data with previous to find new records
function findNewRecords(currentData) {
  if (!Array.isArray(currentData)) {
    console.log('API response is not an array');
    return [];
  }

  if (state.lastRecords.length === 0) {
    // First run, no previous data to compare
    state.lastRecords = currentData;
    saveState();
    return [];
  }

  // Find records in currentData that aren't in lastRecords
  // This assumes each record has a unique 'id' field - adjust as needed
  const newRecords = currentData.filter(currentRecord => 
    !state.lastRecords.some(lastRecord => 
      JSON.stringify(lastRecord) === JSON.stringify(currentRecord)
    )
  );

  // Update last known records
  state.lastRecords = currentData;
  state.lastCheck = new Date().toISOString();
  saveState();

  return newRecords;
}

// Send notification via Telegram
async function sendNotification(record) {
  const message = `📢 New record detected:\n\n${JSON.stringify(record, null, 2)}`;
  try {
    await bot.sendMessage(config.chatId, message);
    console.log('Notification sent');
  } catch (error) {
    console.error('Error sending Telegram message:', error.message);
  }
}

// Main monitoring function
async function monitorApi() {
  console.log(`Starting API monitor (checking every ${config.checkInterval/1000} seconds)`);
  
  setInterval(async () => {
    console.log(`Checking API at ${new Date().toLocaleString()}`);
    
    const currentData = await fetchApiData();
    if (currentData) {
      const newRecords = findNewRecords(currentData);
      
      if (newRecords.length > 0) {
        console.log(`Found ${newRecords.length} new records`);
        for (const record of newRecords) {
          await sendNotification(record);
        }
      } else {
        console.log('No new records found');
      }
    }
  }, config.checkInterval);
}

// Start the monitor
monitorApi();

// Handle process termination
process.on('SIGINT', () => {
  console.log('Saving state before exiting...');
  saveState();
  process.exit();
});