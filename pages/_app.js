import '@/styles/globals.css'
import Footer from "../components/Footer"
import Header from '@/components/Header'
import "mapbox-gl/dist/mapbox-gl.css";

export default function App({ Component, pageProps }) {
  return (<>

  <Component {...pageProps} />


  </>
  
  )
}
