import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif ({
  subsets: ['latin'],
  weight:['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "0 DTE CHASER LLC",
  description: "Revloutionizing the flow of market data and insider movers,through an AI perosnal assitant.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.variable} ${ibmPlexSerif.variable}'}>{children}</body>
    </html>
  );
}
