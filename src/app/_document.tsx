import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";
export default function Document() {
  let GTM_ID=process.env.NEXT_PUBLIC_GTM_ID;
 
  return (
    <Html lang="en">
      <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Montserrat:wght@500;700&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
