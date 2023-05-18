import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import Logo from "../images/puppylogo.svg"
import { NextPage } from "next";
import styles from '../styles/Header.module.css'
import { useRouter } from "next/router";
import Image from "next/image";

const Header: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link href={"/"} legacyBehavior>
       
      <Image 
      src={Logo}
      alt='logo'
      className={styles.image}
      title='Coming Soon'
      />
    
    </Link>

      <div className={styles.menu}>
        <Link href={"/"} legacyBehavior>
          <a className={router.pathname == "/" ? styles.active : styles.link}>
          <p>Home</p>
          </a>
        </Link>

        <Link href={'NFT'} legacyBehavior>
          <a className={router.pathname == "/NFT" ? styles.active : styles.link}>

          <p>NFT</p>


            </a>
        </Link>
        <Link href={''} legacyBehavior>
          <a className={router.pathname == "" ? styles.active : styles.link}>

          <p>Stake</p>


            </a>
        </Link>
        <Link href={''} legacyBehavior>
          <a className={router.pathname == "" ? styles.active : styles.link}>

          <p>DAO</p>


            </a>
        </Link>
        <Link href='https://docs.arbpuppy.city/' legacyBehavior>
          <a className={router.pathname == "" ? styles.active : styles.link}>

          <p>Whitepaper</p>


            </a>
        </Link>
        </div>
        <div>
      <ConnectWallet className={styles.connect} /> 
      </div>
      </div>
    
  );
};

export default Header;
