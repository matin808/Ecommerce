import "../styles/globals.css";
import React from "react";
import { Toaster } from "react-hot-toast"; // for notification pop-up
import { Layout } from "../components";
import { StateContext } from "../context/StateContext"; // state

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
