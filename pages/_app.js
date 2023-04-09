import Head from "next/head";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>First Next App</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
