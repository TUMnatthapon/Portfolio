import "../styles/globals.scss";
import Head from "next/head";
import Header from "../components/Navbar";
import Aos from "aos";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>PORTFOLIO | NATTHAPON</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
