import { useAddress, useContract, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const address = useAddress();
	const contractAddress = "0xb7990AfC53a560817aE09b6BD4fa8412682A21f8";
	
	const { contract } = useContract(contractAddress, "edition-drop");
	
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>💀 Hacker-Diaries</h1>
        
        <Web3Button
        contractAddress={contractAddress}
        action={(contract) => contract.erc1155.claim(0, 1)}
          
        
        >Claim NFT
      </Web3Button>
        
      </main>
    </div>
  );
};

export default Home;