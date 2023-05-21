import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { mainReducer } from "@/redux/actions";
import thunk from "redux-thunk";

export default function App({ Component, pageProps }) {
  const store= createStore(mainReducer, applyMiddleware(thunk))
  return (
    <>
    <Provider store={store}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
    </>
  );
}
