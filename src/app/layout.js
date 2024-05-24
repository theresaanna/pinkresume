import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import "./print.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false

const rethink = Rethink_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>The Resume of Theresa Summa, Software Engineer and Engineering Leader</title>
        <link rel="stylesheet" href="print.css" media="print" onload="this.media='all'" />
      </head>
      <body className={rethink.className}>{children}</body>
    </html>
  );
}
