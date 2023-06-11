import type { NextPage } from "next";
import Footer from "../components/Footer"
import Image from "next/image";
import styles from "../styles/Home.module.css";
import bg from "../images/background.svg";
import WhatIs from "../components/WhatIs";
import Airdrop from "../components/Airdrop";
import Token from "../components/Token";
import Social from "../components/Social";
import Card from "../components/Card";

const Home: NextPage = () => {

  return (

    <div className={styles.container} 
    >  
    <div className={styles.img}>
   <Image
    src={bg}    
    className={styles.img} 
    alt="Background"
    layout="fill"
    objectFit="cover"
  />  
</div>
 
      <main className={styles.main}>
        <p className={styles.p}> Proudly launch on Arbitrum </p>
        <h1 className={styles.title}>
        Building An ecosystem with Community & AI
        </h1>
   
      </main>
      <Airdrop />
      <Token />
      <WhatIs />
      <Card />
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
