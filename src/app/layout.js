import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import "./print.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false

const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "The Resume of Theresa Summa",
  description: "Software Engineer and Engineering Leader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>The Resume of Theresa Summa, Software Engineer and Engineering Leader</title>
      </head>
      <GoogleAnalytics gaId="G-JSKZT4ET8L" />
      <body className={montserrat.className}>
        <header className="site-header">
          <h1><a href="/">Theresa Summa</a></h1>
          <h2>Software Engineer and Engineering Leader</h2>
          <nav className="site-nav">
            <a href="/#blog">Writing</a>
            <a href="/#projects">Projects</a>
            <a href="/resume">Resume</a>
            <a href="/#contact">Contact</a>
            <a href="/#about">About</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
