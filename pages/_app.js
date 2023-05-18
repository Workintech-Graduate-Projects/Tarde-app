import "@/styles/globals.css";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import "mapbox-gl/dist/mapbox-gl.css";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
