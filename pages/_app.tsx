import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Header from "../components/Header";
import "../styles/globals.css";
import { Helmet } from "react-helmet" ;


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = "arbitrum";
  const TITLE = 'ARBPUPPY.CITY - The Next Gen AI Experimental';

  return (
    <>    
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    <ThirdwebProvider activeChain={activeChain}>
      <Header />
      <Component {...pageProps} />      
     
    </ThirdwebProvider>
    </>

  );
}

export default MyApp;
