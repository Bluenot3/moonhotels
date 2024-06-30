const nearAPI = require('near-api-js');
const { connect, keyStores, WalletConnection } = nearAPI;

const nearConfig = {
    networkId: "mainnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://explorer.mainnet.near.org"
};

async function initNear() {
    const near = await connect(nearConfig);
    const wallet = new WalletConnection(near);
    return wallet;
}
