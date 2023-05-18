import type { NextPage } from "next";
import styles from "../styles/WhatIs.module.css";

import { FiArrowUpRight } from 'react-icons/fi';

const WhatIs: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mintInfoContainer}>
        <>
      <div className={styles.infoSide}>
             <div className={styles.card}>
                   
                </div>               
                  </div>
                  <div className={styles.imageSide}>
                  <h1 >What is ARBPUPPY ?</h1>
                  <p className={styles.description}>
                  ARBPUPPY is a deflationary token. It will be used by ARBPUPPY ecosystem applications. The total supply is 180,000,000,000,000,000 tokens. ARBPUPPY belongs to everyone in the Arbitrum community and is also a necessary key to unlock the future chapters of the ARBPUPPY story.
                  <br /><br />
                  ARBPUPPY has a 15% burning tax, so adjusting your slippage tolerance to around 20% is suggested when buying/selling to ensure your successful transactions. Every time you buy ARBPUPPY, you will receive a Lucky Drop ticket with a chance to win an ARB prize based on the purchase amount. You can also stake your ARBPUPPY to earn more.
                </p>
                <span >
                  <br />  
                </span>
                <div className={styles.button}>
                <button className={styles.btn}> Buy ARBPUPPY </button>
                <a  href="https://docs.arbpuppy.city/ecosystem/arbpuppy" target="_blank">
                <button className={styles.btn}>  Tokenomics <FiArrowUpRight /></button></a></div>
          </div>
       
            </>
         
            </div>
  
      
    </div>
  );
};

export default WhatIs;
