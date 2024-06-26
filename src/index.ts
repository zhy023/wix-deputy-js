import { createWeb3Modal, defaultConfig } from '@web3modal/ethers';

// // 1. Get projectId at https://cloud.walletconnect.com
// const projectId = '6fa9501b7cbb19037f6774cc53d5e800';

// // 2. Set chains
// const mainnet = {
//   chainId: 1,
//   name: 'Ethereum',
//   currency: 'ETH',
//   explorerUrl: 'https://etherscan.io',
//   rpcUrl: 'https://cloudflare-eth.com',
// };

// // 3. Create your application's metadata object
// const metadata = {
//   name: 'My Website',
//   description: 'My Website description',
//   url: 'https://mywebsite.com', // url must match your domain & subdomain
//   icons: ['https://avatars.mywebsite.com/'],
// };

// function init() {
//   // 4. Create Ethers config
//   const ethersConfig = defaultConfig({
//     /*Required*/
//     metadata,

//     /*Optional*/
//     enableEIP6963: true, // true by default
//     enableInjected: true, // true by default
//     enableCoinbase: true, // true by default
//     rpcUrl: '...', // used for the Coinbase SDK
//     defaultChainId: 1, // used for the Coinbase SDK
//   });

//   // 5. Create a Web3Modal instance
//   const modal = createWeb3Modal({
//     ethersConfig,
//     chains: [mainnet],
//     projectId,
//     enableAnalytics: true, // Optional - defaults to your Cloud configuration
//     enableOnramp: true, // Optional - false as default
//   });

//   modal.open();
// }

// window.onload = init;

export function getCreateModal(params: any) {
  return createWeb3Modal(params);
}

export function getConfig(params: any) {
  return defaultConfig(params);
}
