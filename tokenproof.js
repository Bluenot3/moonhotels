const Tokenproof = require('tokenproof');

const tokenproof = new Tokenproof({
    chain: 'near', // specify the blockchain
    contractAddress: 'YOUR_ASSET_CONTRACT_ADDRESS', // replace with your asset's contract address
});

async function verifyOwnership(wallet) {
    const accountId = wallet.getAccountId();
    const tokens = await tokenproof.getTokens(accountId);
    return tokens.length > 0; // check if the user owns the specified asset
}
