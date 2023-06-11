import { Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Drop() {
  const { contract } = useContract("0x6B8fF2a5c6f5EC87671D1d629810b1Dc3Ba75721");
  const { mutateAsync: airdrop, isLoading } = useContractWrite(contract, "airdrop")
  
  const _tokenAddress="0xa544416ea58224f2b076DAF618398Ee135824B21";
  const _tokenOwner='0x6B8fF2a5c6f5EC87671D1d629810b1Dc3Ba75721';
  const _recipients='0x6B8fF2a5c6f5EC87671D1d629810b1Dc3Ba75721';
  const _amounts='100'

  const call = async () => {
    try {
      const data = await airdrop({ args: [
        _tokenAddress, 
        _tokenOwner, 
        _recipients, 
        _amounts
      ] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  
  return (
    <Web3Button
      contractAddress="0x6B8fF2a5c6f5EC87671D1d629810b1Dc3Ba75721"
      action={(contract) => {
        contract.call("airdrop", [
            "0xa544416ea58224f2b076DAF618398Ee135824B21", 
            "0x6B8fF2a5c6f5EC87671D1d629810b1Dc3Ba75721", 
            , _amounts])
      }}
    >
      airdrop
    </Web3Button>
  )

}