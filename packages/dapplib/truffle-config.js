require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stomach razor random clutch hunt praise army gauge'; 
let testAccounts = [
"0xc392b542f5fb35431b2eb6307b010ea402bd9188483b12cd8d558da12a5027ec",
"0xa9470df1da6317e49b4e8041c4c2b91dd94c8b88ab9173c6f67f5a20fd1debac",
"0xb002bb38ecefa07aa02197db7ba70bcdc6f98c5e21c761f33338bd392a7e4d0e",
"0xb9e959a9823827c04c82ebd93bdf3ae72f94ded3e04fd946a9639a3789484332",
"0x0bee890c9d632389be1b2aa864036a6fb67764b15a6ed940b7fd4a8e2ade484f",
"0xc80f6306e5736659d7f03c65ad50e810d27db91fc54af424478ddf3002602d73",
"0xa87279820ee8d55d0153b56d40ae056beb60085f86bd10df2e4671d4d58e0b8d",
"0x5b7fd5b1f8ec1d7a8d842778b1cd052ff698a67411b5d0986c48b4dc7b8b4fe7",
"0x0021b77365bcb406f25e25616c40f81b682d88162924c22e7ab71d34eb579a80",
"0x217d500cb37d40f6d9c34b7eb46b678da967ebd73a6ae53c21f02d72836fca70"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

