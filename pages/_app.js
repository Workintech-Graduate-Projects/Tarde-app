import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { mainReducer } from "@/redux/reducer";
import thunk from "redux-thunk";
import { useSSR } from '@nextui-org/react'

export default function App({ Component, pageProps }) {
  const store = createStore(mainReducer, applyMiddleware(thunk));
  const { isBrowser } = useSSR();

  return (
    isBrowser &&(

      <Provider store={store}>
        <NextUIProvider>
            <Component {...pageProps} />
        </NextUIProvider>
      </Provider>
        )

  );
}
