import type { NextPage } from "next";
import styles from "../styles/Airdrop.module.css";

const Airdrop: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Claim your ARBPUPPY now!</h2>
            <p>
            A total of 180,000,000,000,000,000 ARBPUPPY tokens are available to be claimed by those who have the AIPUPPY NFT, ARB Claimer & <a href="https://forms.gle/zS8Z9kWpRHb6fw4p9" target="_blank">Twitter Event </a> contributor. 
            <br />
            <br />
            ARBPUPPY tokens that have not been claimed within 31 days will be used for the Community Long-Term Incentive Reward Program. The ARBPUPPY will be distributed to the top contributors of Arbitrum community and burned. 
            <br />
            <br />
            <a className={styles.time}>
            <span>&#9940;</span> 2023.05-25 8 PM (UTC+0) - 2023.06-25 8 PM (UTC+0)<span>&#9940;</span>
            </a>
            </p>
         
            <div >
            <div className={styles.desc}>
            <p>Claimed</p>
              <p>180.00T</p>
            </div>
           <div className={styles.barcontainer}>
         
            <div className={styles.barchild}>
              </div>
            </div>         
            </div>
              
            <div className={styles.menubar}>
          <p>AIPUPPY Holder</p>
          <p className={styles.menubars}> <a>ARB Claimer</a></p>
          <p>Twitter Event</p>
            </div>    
      
            <div>
            <div className={styles.column}>
              <p>0 </p>
            </div>
            </div>
            <button className={styles.btn}>
            Claim 
            </button>
            <button className={styles.btn}>
            Invite Friends 
            </button>
          <div className={styles.space}>
       
  
          </div>

          </div>
          
        </div>
      </main>
      
    </div>
  );
};

export default Airdrop;
