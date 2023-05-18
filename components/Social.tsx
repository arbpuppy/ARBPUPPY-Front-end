import type { NextPage } from "next";
import styles from "../styles/Social.module.css";
import { BsTwitter, BsMedium } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa'
import Link from "next/link";

const Social: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 style={{textAlign:'center'}}> Join Our Community</h2>
        <p>Join our community today to get the latest news about us</p>
        <div className={styles.grid}>
         <div className={styles.icons}>
        <Link href='https://twitter.com/ARBPuppy' target='_blank' >
            <BsTwitter className={styles.icon} />
        </Link>
        </div>
       
        <div  className={styles.icons}>
        <Link  className={styles.icon} href='https://arbpuppy.medium.com' target='_blank'>
        <BsMedium className={styles.icon} />
        </Link>
        </div>
        <div className={styles.icons}>
        <Link href='https://t.me/ARBPuppy' target='_blank'>
        <FaTelegramPlane  className={styles.icon} />
        </Link>
        </div>
        </div>
      </main>
      
    </div>
  );
};

export default Social;
