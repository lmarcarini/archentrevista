import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Overlay from "../layouts/Overlay";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ArchStore</title>
        <meta
          name="description"
          content="Criado como atividade para o processo de seleção da Arch Office"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Overlay>
        <Component {...pageProps} />
      </Overlay>
    </>
  );
}

export default MyApp;
