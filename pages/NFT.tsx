import {
    useActiveClaimConditionForWallet,
    useAddress,
    useClaimConditions,
    useClaimedNFTSupply,
    useClaimerProofs,
    useClaimIneligibilityReasons,
    useContract,
    useContractMetadata,
    useUnclaimedNFTSupply,
    Web3Button,
  } from "@thirdweb-dev/react";
  import Footer from "../components/Footer";
  import { BigNumber, utils } from "ethers";
  import type { NextPage } from "next";
  import { useMemo, useState } from "react";
  import styles from "../styles/Theme.module.css";
  import { parseIneligibility } from "../utils/parseIneligibility";
  import { myNftDropContractAddress } from "../const/Details";
  import Image from "next/image";
  import NFT7 from "../images/images7.webp";

  const NFT: NextPage = () => {
    
    const { contract: nftDrop } = useContract(myNftDropContractAddress);
    const address = useAddress();
    const [quantity, setQuantity] = useState(1);
    const { data: contractMetadata } = useContractMetadata(nftDrop);
  
    const claimConditions = useClaimConditions(nftDrop);
  
    const activeClaimCondition = useActiveClaimConditionForWallet(
      nftDrop,
      address || ""
    );
    const claimerProofs = useClaimerProofs(nftDrop, address || "");
    const claimIneligibilityReasons = useClaimIneligibilityReasons(nftDrop, {
      quantity,
      walletAddress: address || "",
    });
    const unclaimedSupply = useUnclaimedNFTSupply(nftDrop);
    const claimedSupply = useClaimedNFTSupply(nftDrop);
  
    const numberClaimed = useMemo(() => {
      return BigNumber.from(claimedSupply.data || 0).toString();
    }, [claimedSupply]);
  
    const numberTotal = useMemo(() => {
      return BigNumber.from(claimedSupply.data || 0)
        .add(BigNumber.from(unclaimedSupply.data || 0))
        .toString();
    }, [claimedSupply.data, unclaimedSupply.data]);
  
    const priceToMint = useMemo(() => {
      const bnPrice = BigNumber.from(
        activeClaimCondition.data?.currencyMetadata.value || 0
      );
      return `${utils.formatUnits(
        bnPrice.mul(quantity).toString(),
        activeClaimCondition.data?.currencyMetadata.decimals || 18
      )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
    }, [
      activeClaimCondition.data?.currencyMetadata.decimals,
      activeClaimCondition.data?.currencyMetadata.symbol,
      activeClaimCondition.data?.currencyMetadata.value,
      quantity,
    ]);
  
    const maxClaimable = useMemo(() => {
      let bnMaxClaimable;
      try {
        bnMaxClaimable = BigNumber.from(
          activeClaimCondition.data?.maxClaimableSupply || 0
        );
      } catch (e) {
        bnMaxClaimable = BigNumber.from(1_000_000);
      }
  
      let perTransactionClaimable;
      try {
        perTransactionClaimable = BigNumber.from(
          activeClaimCondition.data?.maxClaimablePerWallet || 0
        );
      } catch (e) {
        perTransactionClaimable = BigNumber.from(1_000_000);
      }
  
      if (perTransactionClaimable.lte(bnMaxClaimable)) {
        bnMaxClaimable = perTransactionClaimable;
      }
  
      const snapshotClaimable = claimerProofs.data?.maxClaimable;
  
      if (snapshotClaimable) {
        if (snapshotClaimable === "0") {
          // allowed unlimited for the snapshot
          bnMaxClaimable = BigNumber.from(1_000_000);
        } else {
          try {
            bnMaxClaimable = BigNumber.from(snapshotClaimable);
          } catch (e) {
            // fall back to default case
          }
        }
      }
  
      const maxAvailable = BigNumber.from(unclaimedSupply.data || 0);
  
      let max;
      if (maxAvailable.lt(bnMaxClaimable)) {
        max = maxAvailable;
      } else {
        max = bnMaxClaimable;
      }
  
      if (max.gte(1_000_000)) {
        return 1_000_000;
      }
      return max.toNumber();
    }, [
      claimerProofs.data?.maxClaimable,
      unclaimedSupply.data,
      activeClaimCondition.data?.maxClaimableSupply,
      activeClaimCondition.data?.maxClaimablePerWallet,
    ]);
  
    const isSoldOut = useMemo(() => {
      try {
        return (
          (activeClaimCondition.isSuccess &&
            BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
              0
            )) ||
          numberClaimed === numberTotal
        );
      } catch (e) {
        return false;
      }
    }, [
      activeClaimCondition.data?.availableSupply,
      activeClaimCondition.isSuccess,
      numberClaimed,
      numberTotal,
    ]);
  
    const canClaim = useMemo(() => {
      return (
        activeClaimCondition.isSuccess &&
        claimIneligibilityReasons.isSuccess &&
        claimIneligibilityReasons.data?.length === 0 &&
        !isSoldOut
      );
    }, [
      activeClaimCondition.isSuccess,
      claimIneligibilityReasons.data?.length,
      claimIneligibilityReasons.isSuccess,
      isSoldOut,
    ]);
  
    const isLoading = useMemo(() => {
      return (
        activeClaimCondition.isLoading ||
        unclaimedSupply.isLoading ||
        claimedSupply.isLoading ||
        !nftDrop
      );
    }, [
      activeClaimCondition.isLoading,
      nftDrop,
      claimedSupply.isLoading,
      unclaimedSupply.isLoading,
    ]);
  
    const buttonLoading = useMemo(
      () => isLoading || claimIneligibilityReasons.isLoading,
      [claimIneligibilityReasons.isLoading, isLoading]
    );
    const buttonText = useMemo(() => {
      if (isSoldOut) {
        return "Load NFT dataLoad NFT data ";
      }
  
      if (canClaim) {
        const pricePerToken = BigNumber.from(
          activeClaimCondition.data?.currencyMetadata.value || 0
        );
        if (pricePerToken.eq(0)) {
       
          return "Mint (Free)";
        }

        return `Congratulations, you are eligible! `;

      }
      if (claimIneligibilityReasons.data?.length) {
        return parseIneligibility(claimIneligibilityReasons.data, quantity);
      }
      if (buttonLoading) {
        return "Checking eligibility...";
      }
      
      return "You are not eligible";
    }, [
      isSoldOut,
      canClaim,
      claimIneligibilityReasons.data,
      buttonLoading,
      activeClaimCondition.data?.currencyMetadata.value,
      priceToMint,
      quantity,
    ]);
  
    return (
      <div className={styles.container}>
        <div className={styles.mintInfoContainer}>
          
            <>
              <div className={styles.infoSide}>
                {/* Title of your NFT Collection */}
                <h1>AIPUPPY NFTS</h1>
                {/* Description of your NFT Collection */}
                <p className={styles.description}>
                AIPUPPY is a first ARBPUPPY ERC-721 Token as we know it NFT. 
                
                AIPUPPY NFTs can be staked weekly and shareholders can claim ARBPUPPY tokens as rewards for staking nfts. 10K AIPUPPY will be available & can be minted for ARBPUPPY Community based first-come first-serve.
                <br />
                <br />Who can mint AIPUPPY? ARB Claimer & every address that has at least 3 transactions on the Arbitrum network can claim this NFT.
               <br />
                
               <br />
                <br />Find more about NFT AIPUPPY
                <a href='https://docs.arbpuppy.city/ecosystem/aipuppy-nft' target="_blank"> here...</a>
                </p>
              </div>
  
              <div className={styles.imageSide}>
                {/* Image Preview of NFTs */}
                <Image   className={styles.image}  alt='nft' src={NFT7}
/>
                
  
                 {/* Amount claimed so far */}
                 <div className={styles.mintCompletionArea}>
                <div className={styles.mintAreaLeft}>
                  
                </div>
                <div className={styles.mintAreaRight}>
                  {claimedSupply && unclaimedSupply ? (
                    <p>
                    </p>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>

                {claimConditions.data?.length === 0 ||
                claimConditions.data?.every(
                  (cc) => cc.maxClaimableSupply === "0"
                ) ? (
                  <div>
                   <h4 style={{textAlign:'center'}}>
                    Minting has not started yet. 
                  </h4>
                  <p style={{textAlign:'center'}}>AIPUPPY can be minted on :</p>
                  <h2 style={{textAlign:'center'}}>2023.05.19 13:00 (UTC+0)</h2>
                  </div>
                ) : !activeClaimCondition.data && claimConditions.data ? (
                  <div>
                     <p style={{textAlign:'center'}}>is loading and checking your address...</p>
                  </div>
                ) : (
                  <>
                 
                    <div className={styles.quantityContainer}>
                      <h4>

                        {buttonLoading ? "checking your eligibility" : buttonText}
                        </h4>
                    </div>
  
                    <div className={styles.mintContainer}>
                      {isSoldOut ? (
                        <div>
                          <p>Loading ....</p>
                        </div>
                      ) : (
                        <Web3Button
                          contractAddress={nftDrop?.getAddress() || ""}
                          action={(cntr) => cntr.erc721.claim(quantity)}
                          isDisabled={!canClaim || buttonLoading}
                          onError={(err) => {
                            console.error(err);
                            alert("Error! Try again later...");
                          }}
                          onSuccess={() => {
                            setQuantity(1);
                            alert("Successfully claimed NFTs");
                          }}
                        >
                        Mint
                          
                        </Web3Button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </>
      
        </div>
        <div className={styles.footer}>
        <Footer />
        </div>
      </div>
    );
  };  

export default NFT;
