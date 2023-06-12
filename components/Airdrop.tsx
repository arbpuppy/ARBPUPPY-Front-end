import type { NextPage } from "next";
import styles from "../styles/Airdrop.module.css";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import TAB from "./Tab"
const Airdrop: NextPage = () => {
  
    const address = useAddress();
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Claim your ARBPUPPY now!</h2>
            <p>
            A total of 180,000,000,000,000,000 ARBPUPPY tokens are available to be claimed by those who have the <a href="https://www.arbpuppy.city/NFT" target="_blank">AIPUPPY NFT</a>, ARB Claimer & <a href="https://forms.gle/zS8Z9kWpRHb6fw4p9" target="_blank">Genesis Tier</a> 
            <br />
            <br />
        
            ARBPUPPY tokens that have not been claimed within 31 days will be used for the Community Long-Term Incentive Reward Program. The ARBPUPPY will be distributed to the top contributors of Arbitrum community and burned. 

            </p>
        <div className={styles.title}>
  
        <a href="#">
         Airdrop claims will be live until: 2023.06.14 (UTC+0)
         </a>
        </div>
            <TAB />
         
          
            <p > Get 5% commission when friends use your referral link below: 
  <br />https://arbpuppy.city/#{address}</p>

          <div className={styles.space}>
       
          </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Airdrop;
