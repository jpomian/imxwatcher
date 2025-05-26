import requests
import json

def fetch_listings():
    url = "https://api.immutable.com/v1/chains/imtbl-zkevm-mainnet/orders/listings?status=ACTIVE&sell_item_contract_address=0x62f2966c417DF805d2Bc3b685a87c2ab3800fee9"
    headers = {"Accept": "application/json"}
    
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.json()


def process_data():
    output = fetch_listings()
    
    buy_sell_data = [{"created": item["created_at"], "buy": item["buy"], "sell": item["sell"]} for item in output['result']]
          
    with open('nft_metadata.json', 'w') as f:
        json.dump(buy_sell_data, f, indent=2)
    
    print("Data successfully saved to nft_metadata.json")

if __name__ == "__main__":
    process_data()