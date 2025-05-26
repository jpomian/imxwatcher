import fs from 'fs';

const PAYLOAD = 5;

async function fetchListings(limit = 5) {
    const url = `https://api.immutable.com/v1/chains/imtbl-zkevm-mainnet/orders/listings?status=ACTIVE&sell_item_contract_address=0x62f2966c417DF805d2Bc3b685a87c2ab3800fee9&order_by=created_at&direction=desc&page_size=${limit}`;
    const headers = { "Accept": "application/json" };

    const response = await fetch(url, { headers });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

async function processData() {
    try {
        const output = await fetchListings();
        
        const buySellData = output.result.map(item => ({
            created: item.created_at,
            buy: item.buy,
            sell: item.sell,
	    price: item.sell[0]?.amount
        }));
        
        fs.writeFileSync('data/full_metadata.json', JSON.stringify(output, null, 2));
        fs.writeFileSync('data/nft_metadata.json', JSON.stringify(buySellData, null, 2));
        console.log("Done");
    } catch (error) {
        console.error("Error processing data:", error);
    }
}

processData();
