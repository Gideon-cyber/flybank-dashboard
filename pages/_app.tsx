import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { PropagateLoader } from "react-spinners";
import Router from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setLoading(true);
    });
    Router.events.on("routeChangeComplete", (url) => {
      setLoading(false);
    });
  });
  let persistor = persistStore(store);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <PropagateLoader color="#0F1378" />
        </div>
      ) : (
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      )}
    </>
  );
}
