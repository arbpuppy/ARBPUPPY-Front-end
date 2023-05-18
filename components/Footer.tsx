import type { NextPage } from "next";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Logo from "../images/puppylogo.svg"
import Link from "next/link";

const Footer: NextPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        
        <div className={styles.image}>
          <Link href="/">
          <Image 
          src={Logo}
          alt=''
          className={styles.images}
          />
          </Link>
          <p>Decentralized AI & Community on Arbitrum.</p>
        </div>

        <div className={styles.items}>
        <h4>Useful Links</h4>
        <a href='https://docs.arbpuppy.city/ecosystem/arbpuppy'>
        <p>ARBPUPPY</p>
          </a>
          
        <p>Stake</p>
        <Link href="/NFT">
        <p>AIPUPPY</p>
        </Link>
        <p>DAO</p>

        </div>
        
        <div className={styles.items}>
        <h4>Resources</h4>
        <a href="https://docs.arbpuppy.city/" target="_blank">
        <p>Documentation</p>
        </a>
        <a href="https://docs.arbpuppy.city/ecosystem/arbpuppy" target="_blank">
        <p>Ecosystem</p>
        </a>
        <a href="https://github.com/arbpuppy" target="_blank">
        <p>Github</p>
        </a>

        </div>

        <div className={styles.items}>
        <h4>Follow us</h4>
        <a href="https://twitter.com/ARBPuppy" target="_blank">
        <p>Twitter</p>
        </a>
        <a href="https://t.me/arbpuppy_ann" target="_blank">
        <p>Telegram</p>
        </a>
        <a href="https://t.me/arbpuppy" target="_blank">
        <p>Discussion</p>
        </a>
        <a href="https://arbpuppy.medium.com/" target="_blank">
        <p>Medium</p>
        </a>

        </div>
      </div>
      <hr  style={{
    color: '#ffffff58',
    backgroundColor: '#ffffff58',
    border:'#ffffff58',
    height: .1,
}}/>
    <p style={{textAlign:'center', fontSize:'12px', fontWeight:'300', padding:'15px', color:'#ffffff81', marginBottom:'-9rem'}}>ARBPUPPY 2023 © All rights reserved.</p>
    </div>
    
    
  );
};

export default Footer;
