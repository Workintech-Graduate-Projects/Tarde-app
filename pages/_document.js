import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <title>Relax Native</title> */}
        <meta charSet="utf-8" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"  />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;900&display=swap"
          rel="stylesheet"
        ></link>
        {CssBaseline.flush()}
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
