import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Token.module.css";
import NFT2 from "../images/images2.jpg";
import NFT4 from "../images/images4.webp";
import NFT5 from "../images/images5.webp";
import NFT6 from "../images/images6.webp";
;
import { useRouter } from "next/router";
import Link from "next/link";

const Token: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
       <h2>Explore our collection</h2>
       <p>Be the first in our &quot;AI NFT&quot; journey and discover more experience and advantages.</p>
        
      <section className={styles.info}>       
      <Link href={"NFT"} legacyBehavior>
      <a className={router.pathname == "/NFT" ? styles.active : ''}>
        <div className={styles.card}>       
          <div className={styles.description}>       
        <h1 >AIPUPPY</h1>
        <p>available to mint</p>
       
        </div>
      
        </div>      
        </a> 
        </Link>
        <div>
        <Image 
          src={NFT6}
          className={styles.blur}
          alt="nft" 
          title='Coming Soon'
          />        

        </div>

        <div>
        <Image 
          src={NFT2}
          className={styles.blur}
          alt="nft" 
          title='Coming Soon'
          />          

        </div>
        <div>
        <Image 
          src={NFT5}
          className={styles.blur}
          alt="nft" 
          title='Coming Soon'
          />          

        </div>
        <div>
        <Image 
          src={NFT4}
          className={styles.blur}
          alt="nft" 
          title='Coming Soon'
          />          

        </div>

        <div className={styles.mintButton}>

        <Link href={"NFT"} legacyBehavior>
    
        <button className={styles.btn}>Mint AIPUPPY</button>
       </Link>

        </div>
      </section>
      
    </div>
  );
};

export default Token;
