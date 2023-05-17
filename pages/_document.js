import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <title>Add a marker using a place name</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
          rel="stylesheet"
        />
      <link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@500&display=swap" rel="stylesheet"></link>
        <meta
          name="viewport"
          content="initial-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
