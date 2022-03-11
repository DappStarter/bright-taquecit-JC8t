require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift riot magic concert grace brave fringe gift'; 
let testAccounts = [
"0x4c3f219fe137246387aaea4553c333dec1ad5356abef750f63bb536d9a3c5cc7",
"0x223cc26ce4b70cc0f12508b87fc7c47554973ee6e44d016c159f7d87b9791f6d",
"0x078444d4ac7f405704975afb6a9e7c34fca980a6453fff3a76c589a0b14e98cd",
"0xc690213c65b04de16b1cb7a7d91d04640edb20bf3620ea4f8ec54fe4e9c7fbdb",
"0xe207116a209d3063af5bab7998f4594b470464c955daffa21bf8d5071200af55",
"0xf138214eb71e0836d44a98848724323db7a9946f5ac4e04693d93b07ae1e7e2b",
"0x4e484d1433ceb6ed7a859f19436615b80535c13e6f503a0cf260316fdeb7f929",
"0x1d22d622ece0015746042047b29a332cbc8cbbdea4215786a946ed44f1572e7b",
"0x78f1346a030906c113b137ffb55a2cd2710b52b0c80b3365e7836c02b932c545",
"0xc74ff05b3be2dce917cdda6cd923994fece9f0bb23f39822699bbaa9a7695061"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

