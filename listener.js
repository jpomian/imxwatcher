import processData from './format.js';

const LOCATION = 'https://api.immutable.com/v1/chains/imtbl-zkevm-mainnet/orders/listings?status=ACTIVE&sell_item_contract_address=0x62f2966c417DF805d2Bc3b685a87c2ab3800fee9&order_by=created_at&direction=desc&page_size=3';
const CHECK_INTERVAL = 20000; // ms

let seenListingIds = new Set();
let output = [];

export async function fetchData() {
    try {
        const response = await fetch(LOCATION);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const currentData = await response.json();
        const currentListings = currentData.result;
        
        if (seenListingIds.size === 0) {
            currentListings.forEach(listing => seenListingIds.add(listing.id));
            console.log(`[${new Date().toISOString()}] Initial data loaded. Tracking ${currentListings.length} listings.`);
            return;
        }

        // Find listings that haven't been seen before
        const newListings = currentListings.filter(listing => !seenListingIds.has(listing.id));
        
        if (newListings.length > 0) {
            // Log each new listing in its original JSON structure
            newListings.forEach(async (listing) => {
                console.log(listing)
                listing = listing.json();
                console.log(listing)
                await processData(listing);
                output.push(listing)
            });
            
            // Add new IDs to the tracking set
            newListings.forEach(listing => seenListingIds.add(listing.id));

            console.log(output);

            return JSON.stringify(output, null, 2);
        } else {
            return;
        }
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error:`, error.message);
    }
}

fetchData();

const intervalId = setInterval(fetchData, CHECK_INTERVAL);

// Clean up on process termination
process.on('SIGINT', () => {
    clearInterval(intervalId);
    console.log('\nStopped monitoring. Exiting...');
    process.exit();
});