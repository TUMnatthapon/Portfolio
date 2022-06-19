import "../styles/globals.scss";
import Head from "next/head";
import Header from "../components/Navbar";

function MyApp({ Component, pageProps }) {
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
