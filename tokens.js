// tokens.js
const tokens = {
  symbols: {
    USDC: "0x6de8acc0d406837030ce4dd28e7c08c5a96a30d2",
    ETH: "0x52A6c53869Ce09a731CD772f245b97A4401d3348",
    GOG: "0xb00ed913aAFf8280C17BfF33CcE82fE6D79e85e8",
    QUEST: "0x8A1e8Cf52954C8D72907774D4b2b81f38Dd1c5c4"
  },
  addresses: {}
};

Object.entries(tokens.symbols).forEach(([symbol, address]) => {
  tokens.addresses[address.toLowerCase()] = symbol; // Store as lowercase for case-insensitive matching
});

export default tokens;
