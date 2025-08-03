const ID = 863;

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

const nftData = await getURI(ID)

// nftData.

console.log(nftData)
