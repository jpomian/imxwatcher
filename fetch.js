import fs from 'fs';
import tokens from './tokens.js'

const PAYLOAD = 5;
const k = 1.14;

function getTokenSymbol(address) {
  const normalizedAddr = address.toLowerCase();
  return tokens.addresses[normalizedAddr] || 'UNKNOWN';
}

async function fetchListings(limit = PAYLOAD) {
    const url = `https://api.immutable.com/v1/chains/imtbl-zkevm-mainnet/orders/listings?status=ACTIVE&sell_item_contract_address=0x62f2966c417DF805d2Bc3b685a87c2ab3800fee9&order_by=created_at&direction=desc&page_size=${limit}`;
    const headers = { "Accept": "application/json" };

    const response = await fetch(url, { headers });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

async function getURI(tokenId) {
    try {
        const response = await fetch(`https://ravenquest.io/nft/data/land/${tokenId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const tokenUri = await response.json();
        return tokenUri;
    } catch (error) {
        console.error("Error fetching NFT data:", error);
        return null;
    }
}

function getTimeAgo(isoTimestamp) {
    const createdDate = new Date(isoTimestamp);
    const now = new Date();
    const seconds = Math.floor((now - createdDate) / 1000);
    
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };
    
    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
        }
    }
    
    return "just now";
}

async function processData() {
    try {
        const output = await fetchListings();

        const filterData = (nft) => {
   		if (!nft) return null;
    		return {
        		name: nft.name,
        		image: nft.image,
        		rarity: nft.attributes?.find(a => a.trait_type === "Rarity")?.value || "Unknown",
        		perk: nft.attributes?.find(a => a.trait_type === "Perk")?.value || "None"
    		};
	};

        const buySellData = await Promise.all(
        output.result.map(async (item) => {
                const tokenId = item.sell[0].token_id;
                const contractAddy = item.buy[0].contract_address;
                const uriData = await getURI(tokenId);

                return {
                    created: getTimeAgo(item.created_at),
                    id: tokenId,
                    nft: filterData(uriData),
                    currency: getTokenSymbol(contractAddy),
                    price: (parseFloat(item.buy[0].amount) * 1e-6 * k).toFixed(2)
                };
            })
        );

        fs.writeFileSync('data/full_metadata.json', JSON.stringify(output, null, 2));
        fs.writeFileSync('data/nft_metadata.json', JSON.stringify(buySellData, null, 2));
        console.log(JSON.stringify(buySellData, null, 2));
        console.log("Done");
    } catch (error) {
        console.error("Error processing data:", error);
    }
}

processData();
