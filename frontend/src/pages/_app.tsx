// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { gnosisChiado } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
const { chains, provider } = configureChains(
    [gnosisChiado],
    [publicProvider()],
);

const { connectors } = getDefaultWallets({
    appName: "CryPay",
    projectId: "YOUR_PROJECT_ID",
    chains,
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </WagmiConfig>
        </ChakraProvider>
    );
}
