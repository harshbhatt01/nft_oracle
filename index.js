const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "XcYQc1b4QtGOUaMrHDdQUFRm1R9rF1jNfTk86YuNyDPy4WhA2fsw52X56XFaOehm",
  });
  
  
  const totalRanges = 1000;
  const range = 1;
  const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";
  //const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
  const chain = EvmChain.ETHEREUM;

//   const GetNFTsFromWallet = await Moralis.EvmApi.nft.getWalletNFTs({   
//       address,
//       chain,
//   });
  
  const GetNFTsFromContract = await Moralis.EvmApi.nft.getContractNFTs({
    address,
    chain,
    totalRanges,
    range,
});
  //console.log(GetNFTsFromWallet.toJSON());
  console.log(GetNFTsFromContract.toJSON());
}

runApp();