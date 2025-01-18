'use client';

// import {
//   createNetworkConfig,
//   SuiClientProvider,
//   WalletProvider,
// } from "@mysten/dapp-kit";
// import { getFullnodeUrl } from "@mysten/sui/client";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '@mysten/dapp-kit/dist/index.css';
import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import Nav from '@/modules/nav/Nav';

// const { networkConfig } = createNetworkConfig({
//   localnet: { url: getFullnodeUrl("localnet") },
//   mainnet: { url: getFullnodeUrl("mainnet") },
// });
// const queryClient = new QueryClient();
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <QueryClientProvider client={queryClient}>
          <SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
            <WalletProvider> */}
        <Nav />
        {children}
        {/* </WalletProvider>
          </SuiClientProvider>
        </QueryClientProvider> */}
      </body>
    </html>
  );
}
