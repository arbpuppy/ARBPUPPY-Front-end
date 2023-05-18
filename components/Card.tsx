import type { NextPage } from "next";
import styles from "../styles/Card.module.css";
import { TbCoins } from 'react-icons/tb';
import { useRouter } from "next/router";
import { MdOutlineContentCopy } from 'react-icons/md'

const Card: NextPage = () => {
  const share = useRouter();
 
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
        
          <div className={styles.card}>
            <div>
                <p >Total Supply </p>
                 <h2><TbCoins /> 180 T </h2>
            </div>
            <div>
                <p>Airdrop</p>
                 <h2 >180 T</h2>
            </div>
            <div> 
                <p>Staked </p>
                <h2>TBA</h2>
            </div>
            <div>
                <p>LP </p>
                 <h2>TBA</h2>
            </div>
           
            <div >
            
                <p>Burned</p>
                <h2 > TBA</h2>
            </div>
           
            
       
          </div>
          <div className={styles.copy}>
          <p>Contract Address :  <span style={{color:'aqua'}}><a href='https://arbiscan.io/token/0x58f5019b506417dbc87fc714ce28655e7ae388c4' target='_blank'>0x58f5019B506417dBc87fC714cE28655e7ae388C4</a> </span><MdOutlineContentCopy  /> </p></div>
        </div>
      </main>
      
    </div>
  );
};

export default Card;
